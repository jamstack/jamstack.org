// Handy to save the results to a local file
// to prime the dev data source

const fs = require("fs");

module.exports = (data, path) => {
  if(process.env.ELEVENTY_ENV == 'seed') {
    fs.writeFile(path, data, err => {
      if(err) {
        console.log(err);
      } else {
        console.log(`Data saved for dev: ${path}`);
      }
    });
  }
}
