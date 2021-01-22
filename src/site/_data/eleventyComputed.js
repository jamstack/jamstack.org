const placename = require("placename");
const lookupCountryName = require("i18n-iso-countries");

async function getCountryCode(searchTerm) {
  return new Promise(resolve => {
    placename(searchTerm, function (err, rows) {
      if(rows.length) {
        resolve(rows[0].country);
      } else {
        resolve();
      }
    })
  });
}

function getCountryName(countryCode) {
  if(countryCode) {
    return lookupCountryName.getName(countryCode, "en", {select: "official"});
  }
}

module.exports = {
  community: async function(data) {
    let community = data.community.filter(e => true);
    for(let meetup of community) {
      // skip if populated in the YAML file
      if(meetup.country) {
        continue;
      }

      // sry for await in loop
      let countryCode = await getCountryCode(meetup.name);
      if(countryCode) {
        meetup.country = getCountryName(countryCode);
      }
    }

    return community;
  }
};