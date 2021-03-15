const algoliaConfig = require("../../../algolia.config.js");

// don’t hardcode anything here, make the config variables opt-in
module.exports = {
  appId: algoliaConfig.appId,
  indexName: algoliaConfig.indexName,
  searchOnlyApiKey: algoliaConfig.searchOnlyApiKey,
};