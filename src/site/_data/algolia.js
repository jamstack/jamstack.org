const algoliaConfig = require("../../../algolia.config.js");

// make sure we don’t leak algoliaConfig.apiKey
module.exports = {
  appId: algoliaConfig.appId,
  indexName: algoliaConfig.indexName,
  searchOnlyApiKey: algoliaConfig.searchOnlyApiKey,
};