var syncromatics = require('../index');

// set the hostname
var options = {
  host: 'http://www.ladotbus.com'
}

// print out the current available regions for la dept of transportation
syncromatics.regions(options, function(error, regions) {
  if (!error) {
    console.log(regions);
  }
});