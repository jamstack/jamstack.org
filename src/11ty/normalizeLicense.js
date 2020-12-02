const correct = require("spdx-correct");

module.exports = function(license, title) {
  let correctedLicenseName = correct(license);
  if(correctedLicenseName) {
    return correctedLicenseName;
  }
  console.log( `WARN License name (${license}) for ${title} not found on the approved SPDX License List: https://spdx.org/licenses/` );
  return license;
};