// Fetches stars, forks and open issues for every GitHub repo listed in the
// generators and headless CMS entries and writes them to src/github-stats.json.
// Run weekly by .github/workflows/update-github-stats.yml; the snapshot is used
// by src/site/_data/github.js whenever live data is unavailable.
//
// Usage: GITHUB_TOKEN=<token> node scripts/update-github-stats.js

const fs = require("fs");
const path = require("path");
const fastglob = require("fast-glob");
const graymatter = require("gray-matter");

const OUTPUT = path.join(__dirname, "..", "src", "github-stats.json");
const BATCH_SIZE = 25;
const MAX_ATTEMPTS = 3;

function getRepos() {
  let files = fastglob.sync([
    "./src/site/generators/*.md",
    "./src/site/headless-cms/*.md"
  ], { caseSensitiveMatch: false });

  let repos = new Set();
  for(let file of files) {
    let { data } = graymatter.read(file);
    if(!data.repo || data.disabled) {
      continue;
    }
    if(data.repohost && data.repohost !== "github") {
      continue;
    }
    let [user, repo] = String(data.repo).trim().split("/");
    if(user && repo) {
      repos.add(`${user}/${repo}`);
    }
  }
  return [...repos].sort((a, b) => a.localeCompare(b));
}

async function fetchBatch(repos, token, attempt = 1) {
  let fields = repos.map((fullName, index) => {
    let [owner, name] = fullName.split("/");
    return `r${index}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) {
      stargazers { totalCount }
      forks { totalCount }
      issues(states: [OPEN]) { totalCount }
    }`;
  });

  let response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Authorization": `bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query: `query { ${fields.join("\n")} }` })
  });

  if(response.status >= 500 && attempt < MAX_ATTEMPTS) {
    console.warn(`GitHub API responded with ${response.status}, retrying (${attempt}/${MAX_ATTEMPTS - 1})`);
    await new Promise(resolve => setTimeout(resolve, attempt * 5000));
    return fetchBatch(repos, token, attempt + 1);
  }

  if(!response.ok) {
    throw new Error(`GitHub API responded with ${response.status}: ${await response.text()}`);
  }

  let json = await response.json();
  if(json.errors && json.errors.some(e => e.type === "RATE_LIMITED")) {
    throw new Error("GitHub API rate limit reached.");
  }

  let results = {};
  repos.forEach((fullName, index) => {
    let repository = json.data && json.data[`r${index}`];
    if(!repository) {
      console.warn(`Skipping ${fullName}: not found on GitHub`);
      return;
    }
    results[fullName] = {
      stars: repository.stargazers.totalCount,
      forks: repository.forks.totalCount,
      issues: repository.issues.totalCount
    };
  });
  return results;
}

async function main() {
  let token = process.env.GITHUB_TOKEN || process.env.GITHUB_READ_TOKEN;
  if(!token) {
    throw new Error("Set GITHUB_TOKEN (or GITHUB_READ_TOKEN) to query the GitHub API.");
  }

  let repos = getRepos();
  let stats = {};
  for(let i = 0; i < repos.length; i += BATCH_SIZE) {
    Object.assign(stats, await fetchBatch(repos.slice(i, i + BATCH_SIZE), token));
  }

  fs.writeFileSync(OUTPUT, JSON.stringify(stats, null, 2) + "\n");
  console.log(`Wrote stats for ${Object.keys(stats).length} of ${repos.length} repos to ${path.relative(process.cwd(), OUTPUT)}`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
