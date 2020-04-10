const yaml = require('js-yaml');
const fs   = require('fs');

// Collect a unique, sorted list of all the tools mentioned in all the examples
module.exports = () => {

  try {
    const path = './src/site/_data/examples/';
    let tools = [];
    fs.readdirSync(path).forEach(file => {
      let example = yaml.safeLoad(fs.readFileSync(`${path}${file}`, 'utf8'));
      tools = [...tools, ...example.tools];
    });
    let filteredTools = [...new Set(tools)];
    return filteredTools.sort();
  } catch (err) {
    console.log(err);
  }

}
