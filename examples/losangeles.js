var syncromatics = require('..');

// set the hostname
var options = {
  host: 'http://www.ladotbus.com',
  id: 'regions'
};

// print out the current available regions for la dept of transportation
syncromatics.get(options, function(error, result) {
  if (!error) {
    console.log(result);
  }
});
