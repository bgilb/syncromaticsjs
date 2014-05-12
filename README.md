# Syncromaticsjs
Node wrapper api for getting data from the [syncromatics](http://syncromatics.com) transit servers.

# Hosts
Here is an incomplete list of transit systems hosts using syncromatics:

* UPenn Transit System (http://pennrides.com)
* Los Angeles Department of Transportation (http://ladotbus.com)
* keywest (http://kwtransit.com)
* UC San Diego (http://www.ucsdbus.com/)
* University of South Florida (http://www.usfbullrunner.com)
* SF Presidio (http://www.presidiobus.com/)
* CSU Long Beach (http://csulbshuttle.com)
* Mississippi State (http://transit.msstate.edu/)
* CSU Pomona (http://broncoshuttle.com/)
* University of Delaware (http://udshuttle.com)
* University of San Diego (http://usdtram.com)
* National Institute of Health (http://wttsshuttle.com/)
* UC San Francisco (http://ucsfshuttles.com)

# Why do this?
I do not like the user interface to the transit data from my school transit system which uses syncromatics, so I wanted a convienent way to get the transit data. This node module provides an easy way to get the most important data points like the routes and vehicles in operation.

# Install from the npm registry

`$ npm install syncromaticsjs`

[![NPM version](https://badge.fury.io/js/syncromaticsjs.svg)](http://badge.fury.io/js/syncromaticsjs)

# Examples

```javascript
var syncromatics = require('syncromaticsjs');

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

```

## options
### regions
```javascript
var options = {
  host: 'http://www.ladotbus.com',
  id: 'regions'
};
```

### region
```javascript
var options = {
  host: 'http://www.ladotbus.com',
  regionId: 6,
  id: 'region'
};
```

### routes
```javascript
var options = {
  host: 'http://www.ladotbus.com',
  regionId: 6,
  id: 'routes'
};
```

### route
```javascript
var options = {
  host: 'http://www.ladotbus.com',
  regionId: 6,
  routeId: 230,
  id: 'route'
};
```

### waypoints
```javascript
var options = {
  host: 'http://www.ladotbus.com',
  regionId: 6,
  routeId: 230,
  id: 'waypoints'
};
```

### stops
```javascript
var options = {
  host: 'http://www.ladotbus.com',
  regionId: 6,
  routeId: 230,
  directionId: 0,
  id: 'stops'
};
```

### vehicles
```javascript
var options = {
  host: 'http://www.ladotbus.com',
  regionId: 6,
  routeId: 230,
  id: 'vehicles'
};
```

# Testing
To install dependencies, `npm install` then `npm test` to run the tests

[![Build Status](https://travis-ci.org/bgilb/syncromaticsjs.svg?branch=master)](https://travis-ci.org/bgilb/syncromaticsjs)

# License
Copyright (c) 2014, Blaine Gilbreth

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

I have no affiliation with syncromatics.