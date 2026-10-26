---
title: vagejs
repo: agevenkat/vagejs
homepage: https://vagejs.com
language:
  - TypeScript
license:
  - MIT
templates:
  - TypeScript
description: A static site generator for building websites with AI coding assistants. Markdown pages, checks before publishing, and safe deploys.
---

vagejs turns Markdown files into a static website and checks it before anything goes live: broken links, missing titles and descriptions, structured data and accessibility. Every new site includes an AGENTS.md that tells AI coding assistants such as Claude Code, Cursor and Copilot how to work on it. Sitemaps, robots.txt and llms.txt are generated from the pages that exist, and sites ship no JavaScript by default.

### Installation

```sh
npm create vagejs@latest my-site
```

It asks whether to install and start the site. Press Enter, and it opens in your browser.

### Hello world

`src/pages/index.md` becomes the home page:

```markdown
---
title: Hello world
description: My first vagejs page.
---

# Hello world
```

Deploy to GitHub Pages, Cloudflare or Netlify with `npx vage deploy`. Docs: https://vagejs.com/docs/
