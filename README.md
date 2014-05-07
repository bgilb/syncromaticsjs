# syncromaticsjs
Wrapper api for getting data from the [syncromatics](http://syncromatics.com) transit servers.

# install

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

`npm test`