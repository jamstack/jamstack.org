require('dotenv').config();

module.exports = {
  appId: 'VGOL4P01VV',
  indexName: 'jamstack',
  apiKey: process.env.ALGOLIA_API_KEY,
  // It’s okay to have this in the repo, it’s used in the clientside JS
  searchOnlyApiKey: "a457b566acbf454a61eaaae2e4fee0bf",
};
