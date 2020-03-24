const { DateTime } = require('luxon');
const util = require('util');
const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {



  // Layout aliases for convenience
  eleventyConfig.addLayoutAlias('default', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('conf', 'layouts/conf.njk');

  // a debug utility
  eleventyConfig.addFilter('dump', obj => {
    return util.inspect(obj)
  });

  // Date helpers
  eleventyConfig.addFilter('readableDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('LLLL d, y');
  });
  eleventyConfig.addFilter('htmlDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('y-MM-dd');
  });


  eleventyConfig.addFilter('select', (array, clause) => {
    const property = clause.split("=")[0];
    const value = clause.split("=")[1];
    return array.filter(item => item[property].includes(value));
  });

  // Grab experpts and sections from a file
  eleventyConfig.addFilter("section", require("./src/filters/section.js") );
  // eleventyConfig.addFilter("featured", require("./src/filters/featured.js") );

  // Static assets to pass through
  eleventyConfig.addPassthroughCopy("./src/site/fonts");

  // Support yaml for data files
  eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));

  // convert json to yaml
  eleventyConfig.addFilter('dumpasyaml', obj => {
    return yaml.safeDump(obj)
  });


  return  {
    dir: {
      input: "src/site",
      inludes: "_includes",
      output: "dist"
    },
    passthroughFileCopy: true
  };

};
