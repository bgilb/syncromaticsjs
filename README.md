# syncromaticsjs
Wrapper api for getting data from the [syncromatics](http://syncromatics.com) transit servers.

# install from the npm registry

`npm install syncromaticsjs`

# example

```javascript
var syncromatics = require('syncromaticsjs');

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

```

# testing
To install dependencies, `npm install` then `npm test` to run the tests

[![Build Status](https://travis-ci.org/bgilb/syncromaticsjs.svg?branch=master)](https://travis-ci.org/bgilb/syncromaticsjs)