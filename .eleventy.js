const { DateTime }  = require('luxon');
const util          = require('util');

module.exports = function(eleventyConfig) {


  // eleventyConfig.addCollection("posts", function(collection) {
  //   return collection.getFilteredByGlob("src/site/blog/*.md").reverse();
  // });

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

  // Grab experpts and sections from a file
  eleventyConfig.addFilter("section", require("./src/filters/section.js") );

  // Static assets to pass through
  eleventyConfig.addPassthroughCopy("./src/site/fonts");

  return  {
    dir: {
      input: "src/site",
      inludes: "_includes",
      output: "dist"
    },
    passthroughFileCopy: true
  };

};
