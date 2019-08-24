const axios  = require('axios');
const seed   = require('../../../utils/save-seed.js');

var url = `https://api.meetup.com/find/groups?&sign=true&photo-host=public&text=jamstack&radius=global&page=20`;

module.exports = () => {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        seed(JSON.stringify(response.data), `${__dirname}/../dev/meetups.json`)
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  })
}
