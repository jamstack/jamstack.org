const correct = require("spdx-correct");

module.exports = function(license, title) {
  let correctedLicenseName = correct(license);
  if(correctedLicenseName) {
    return correctedLicenseName;
  }
  console.log( `WARN Invalid license name for ${title}:`, license );
  return license;
};