require('dotenv').config();

const algoliaConfig = require('./algolia.config.js');
const _ = require('golgoth/lodash');

module.exports = {
  playlists: [
    'PL58Wk5g77lF-VssZBBOxEWCd6AODGNtND', // Tutorials and presentations
    'PL58Wk5g77lF85BuoWgPQZhOxDIPzx1F1z', // Meetups
    'PL58Wk5g77lF_mT2y-v0u4wQngzIIuGpyM', // JamSnacks
    'PL58Wk5g77lF94tg-F3y5zRyDeLVhTDnTg', // Jamstack Conf Oct 2020
    'PL58Wk5g77lF8jzqp_1cViDf-WilJsAvqT', // Jamstack Conf May 2020
    'PL58Wk5g77lF_gCGGqbVZMBun9x70yC4o-', // Jamstack Conf SF 2019
    'PL58Wk5g77lF8yBcRouUcOv5dRz0rmDzKD', // Jamstack Conf London 2019
    'PL58Wk5g77lF9_tthBm3jHQJedDvPSURhd', // Jamstack Conf NYC 2019
    'PL58Wk5g77lF-UQ39pejLX2Zn5DxQyExBa', // Jamstack Conf SF 2018
  ],
  knownVideosWithoutCaptions: [
    'DKM-WCYQHa4',
    '5nITeKhoa1E'
  ],
  algoliaCredentials: {
    appId: algoliaConfig.appId,
    indexName: algoliaConfig.indexName,
    settings: {
      typoTolerance: "min",
      // We manually disable typo on years
      disableTypoToleranceOnWords: _.times(50, (year) => `${2000 + year}`),
    },
  },
};
