const axios  = require('axios');
const toJSON = require('xml2js').parseString;
const seed = require('../../../utils/save-seed.js');

var url = process.env.MEDIUM_FEED ||'https://medium.com/feed/netlify';

module.exports = () => {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        // turn the feed XML into JSON
        toJSON(response.data, function (err, result) {
          // create a path for each item based on Medium's guid URL
          result.rss.channel[0].item.forEach(element => {
            var url = element.link[0].split('/');
            element.path = url[url.length-1].split('?')[0];
          });
          let json = {'url': url, 'posts': result.rss.channel[0].item};
          seed(JSON.stringify(json), `${__dirname}/../dev/medium.json`)
          resolve(json);
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};
