
module.exports = function(eleventyConfig) {

  // Support yaml data files
  const yaml = require("js-yaml");
  eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents))

  // pass images directly through to the output
  eleventyConfig.addPassthroughCopy("src/site/img");

  // Date helper
  const { DateTime } = require('luxon');
  eleventyConfig.addFilter('formatDate', (dateObj, formatStr) => {

    // convert any date strings to read dates
    if(typeof(dateObj) == "string") {
      dateObj = new Date(dateObj);
    }
    const format = formatStr ? formatStr : 'LLLL d, y';
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat(format);
  });

  eleventyConfig.addFilter('convertFromEpoc', (time) => {
    let date = new Date(0);


    return date.setUTCSeconds(time);
  });



  // filter a data array based on the value of a property
  eleventyConfig.addFilter('select', (array, clause) => {
    const property = clause.split("=")[0];
    const value = clause.split("=")[1];
    return array.filter(item => item[property].includes(value));
  });

  // Get a random selection of items from an array
  eleventyConfig.addFilter('luckydip', (array, count) => {
    if (count > array.length) {
      count = array.length;
    }
    const shuffled = array.sort( () => 0.5 - Math.random() );
    return shuffled.slice(0, count);
  });

  // Convert an associative array into an indexable, iterable array
  eleventyConfig.addFilter('iterable', (obj) => {
    var iterableArray = new Array();
    for (var item in obj){
      iterableArray.push( obj[item] );
    }
    return iterableArray
  });

  // format a url for display
  eleventyConfig.addFilter('domain', (str) => {
    var url = new URL(str);
    return url.hostname;
  });


  // convert json to yaml
  eleventyConfig.addFilter('dumpasyaml', obj => {
    return yaml.safeDump(obj)
  });

  // a debug utility
  const util = require('util');
  eleventyConfig.addFilter('dump', obj => {
    return util.inspect(obj)
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
