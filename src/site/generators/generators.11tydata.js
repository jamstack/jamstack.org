const correctLicense = require("../../11ty/normalizeLicense");

module.exports = {
  layout: "layouts/tool.njk",
  tags: ["generators"],
  eleventyComputed: {
    license: (data) => {
      return (data.license || []).map(license => correctLicense(license, data.title));
    }
  }
}