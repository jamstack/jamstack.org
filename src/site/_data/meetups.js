const fetch = require('node-fetch');
const yaml = require('js-yaml');
const fs   = require('fs');


module.exports = async () => {

  // if we are in dev mode, don't request data from an API
  // just return previously captured data instead.
  if(process.env.ELEVENTY_ENV == 'dev') {
    return require('./meetups.mocked.json');
  }


  try {
    const groups = yaml.safeLoad(fs.readFileSync('./src/site/_data/community.yaml', 'utf8'));
    let promises = [];
    let events = [];

    groups.forEach(group => {
      if(group.feed) {
        promises.push(
          fetch(group.feed)
          .then(res => res.json())
          .catch(err => {
            console.log('Error fetching meetup data:', err);
          })
        );
      }
    });

    // Return data about any upcoming events
    return Promise.all(promises)
      .then((data) => {
        data.forEach(event => {
          if (event[0]) {
            events.push(event)
          }
        });
      })
      .then(() => {
        return events;
      });

  } catch (err) {
    console.log( err);
  }

}
