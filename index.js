var request = require('superagent');
var _ = require('underscore');

var syncromatics = {};

syncromatics.regions = function(options, callback) {
  var host = options.host;
  request
    .get(host + '/regions')
    .accept('json')
    .end(handle(callback));
}

syncromatics.region = function(options, callback) {
  var host = options.host;
  var regionId = Number(options.regionId);
  request
    .get(host + '/regions')
    .accept('json')
    .end(handle(callback, function(regions) {
      return _.findWhere(regions, {ID: regionId}) || {};
    }));
}

syncromatics.routes = function(options, callback) {
  var host = options.host;
  var regionId = Number(options.regionId);
  request
    .get(host + '/region/' + regionId + '/routes')
    .accept('json')
    .end(handle(callback));
};

syncromatics.route = function(options, callback) {
  var host = options.host;
  var regionId = Number(options.regionId);
  var routeId = Number(options.routeId);
  request
    .get(host + '/region/' + regionId + '/routes')
    .accept('json')
    .end(handle(callback, function(routes) {
      return _.findWhere(routes, {ID: routeId}) || {};
    }));
};

syncromatics.waypoints = function(options, callback) {
  var host = options.host;
  var regionId = Number(options.regionId);
  var routeId = Number(options.routeId);
  request
    .get(host + '/route/' + routeId + '/waypoints')
    .accept('json')
    .end(handle(callback, function(waypointsList) {
      return _.first(waypointsList) || [{}];
    }));
};

syncromatics.stops = function(options, callback) {
  var host = options.host;
  var regionId = Number(options.regionId);
  var routeId = Number(options.routeId);
  var directionId = Number(options.directionId);
  request
    .get(host + '/route/' + routeId + '/direction/' + directionId + '/stops')
    .accept('json')
    .end(handle(callback));
}

syncromatics.vehicles = function(options, callback) {
  var host = options.host;
  var regionId = Number(options.regionId);
  var routeId = Number(options.routeId);
  request
    .get(host + '/route/' + routeId + '/vehicles')
    .accept('json')
    .end(handle(callback));
};

syncromatics.get = function(options, callback) {
  if (options.id === 'regions') {
    return syncromatics.regions(options, callback);
  } else if (options.id === 'region') {
    return syncromatics.region(options, callback);
  } else if (options.id === 'routes') {
    return syncromatics.routes(options, callback);
  } else if (options.id === 'route') {
    return syncromatics.route(options, callback);
  } else if (options.id === 'waypoints') {
    return syncromatics.waypoints(options, callback);
  } else if (options.id === 'stops') {
    return syncromatics.stops(options, callback);
  } else if (options.id === 'vehicles') {
    return syncromatics.vehicles(options, callback);
  }
}

function handle(callback, handleResult) {
  return function(err, res) {
    if (err || res.error) {
      callback(err || res.error);
    } else {
      var json = res.body;
      if (handleResult) {
        json = handleResult(res.body);
      }
      callback(null, json);
    }
  }
}

module.exports = syncromatics;
