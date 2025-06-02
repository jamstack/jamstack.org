module.exports = function(eleventyConfig) {
  // Passthrough copy for CSS
  eleventyConfig.addPassthroughCopy("src/css");

  // Return your Object options:
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist" // This will be healthcare_site/dist relative to healthcare_site folder
    },
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
