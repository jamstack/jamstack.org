const lodashGet = require("lodash/get");
const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  // Support yaml data files
  eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents))

  // pass images directly through to the output
  eleventyConfig.addPassthroughCopy("src/site/img");
  eleventyConfig.addPassthroughCopy({
    "src/js": "js",
    "node_modules/@zachleat/filter-container/*.js": "js",
  });

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

  // A handy markdown shortcode for blocks of markdown
  // coming from our data sources
  const markdownIt = require('markdown-it');
  const md = new markdownIt({
    html: true
  });
  eleventyConfig.addPairedShortcode('markdown', (content) => {
    return md.render(content);
  });


  eleventyConfig.addFilter('convertFromEpoc', (time) => {
    let date = new Date(0);
    return date.setUTCSeconds(time);
  });


  eleventyConfig.addCollection("resources", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/site/resources/*.md");
  });


  // Filter a collection based on items flagged as "featured"
  eleventyConfig.addFilter('featured', (items) => {
    return items.filter(item => item.data.featured);
  });

  // Filter a collection based on the value of a data attribute
  eleventyConfig.addFilter('dataAttr', (items, attr, value) => {
    return items.filter(item => item.data[attr] == value);
  });

  // Filter a collection based on the value of a data attribute
  eleventyConfig.addFilter('whereData', (items, expression) => {
    let key = expression.split('=')[0];
    let val = expression.split('=')[1];
    return items.filter(item => item.data[key] == val);
  });




  // filter a data array based on the value of a property
  eleventyConfig.addFilter('select', (array, clause) => {
    if(clause.indexOf("=") > -1) {
      const property = clause.split("=")[0];
      const value = clause.split("=")[1];
      return array.filter(item => lodashGet(item, property).includes(value));
    } else {
      return array.map(item => lodashGet(item, clause));
    }
  });

  eleventyConfig.addFilter('flatten', (array) => {
    let results = [];
    for(let result of array) {
      if(result) {
        if(Array.isArray(result)) {
          results = [...results, ...result];
        } else {
          results.push(result);
        }
      }
    }
    return results;
  });

  eleventyConfig.addFilter('unique', (array) => {
    let caseInsensitive = {};
    for(let val of array) {
      if(typeof val === "string") {
        caseInsensitive[val.toLowerCase()] = val;
      }
    }
    return Object.values(caseInsensitive);
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
    return iterableArray;
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

  // sort an array of objects by one object key value
  // can also get fancy and do a lodash.get selector string too
  // see https://lodash.com/docs/4.17.15#get
  eleventyConfig.addFilter('sortKey', (arr, selector) => {
    return arr.sort((a, b) => {
      let aKey = lodashGet(a, selector).toLowerCase();
      let bKey = lodashGet(b, selector).toLowerCase();
      if(aKey < bKey) {
        return -1;
      } else if(aKey > bKey) {
        return 1;
      }
      return 0;
    });
  });

  eleventyConfig.addFilter('sortTools', (arr, githubData) => {
    return arr.sort((a, b) => {
      let aKey = githubData[a.data.repo] ? (githubData[a.data.repo].stars || 0) : 0;
      let bKey = githubData[b.data.repo] ? (githubData[b.data.repo].stars || 0) : 0;
      if(aKey < bKey) {
        return 1;
      } else if(aKey > bKey) {
        return -1;
      }
      return 0;
    });
  });


  // Format a path to avoid any Cloudinary URL API miss-steps.
  eleventyConfig.addFilter("cloudinaryifyPath", (str) => {

    if(str) { 
      
      // add generic url encoding 
      str = encodeURI(str);
      
      // we also need to double escape some characters which might appear in text
      // but are meaningful in cloudinary URLs
      str = str.replace(/,/g, '%252C');
      str = str.replace(/\//g, '%252F');

    }
    return str;
  });



  // favicons files
  eleventyConfig.addPassthroughCopy("src/site/browserconfig.xml");
  eleventyConfig.addPassthroughCopy("src/site/site.webmanifest");


  return  {
    dir: {
      input: "src/site",
      inludes: "_includes",
      output: "dist"
    },
    passthroughFileCopy: true,
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk"
  };

};
