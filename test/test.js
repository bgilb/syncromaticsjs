var assert = require('assert');
var testserver = require('./testserver');

testserver.listen(9000);

var syncromatics = require('../index');
describe('syncromatics', function(){
  describe('#regions', function(){
    it('should return a list of available regions', function(done) {
      var options = {
        host: 'http://localhost:9000'
      }
      syncromatics.regions(options, function(error, regions) {
        assert.equal(null, error);
        assert.equal(3, regions.length);
        done();
      })
    })

    it('should throw error if host is incorrect', function(done) {
      var options = {
        host: 'http://lcalhost:9000'
      }
      syncromatics.regions(options, function(error, regions) {
        assert.throws(
          function() {
            throw error
          },
          Error
        );
        done();
      })
    })
  })


  describe('#region', function(){
    it('should return the specified region', function(done) {
      var options = {
        host: 'http://localhost:9000',
        regionId: 8
      }
      syncromatics.region(options, function(error, region) {
        assert.equal(null, error);
        assert.deepEqual({ID:8, Name:'Commuter Express'}, region);
        done();
      })
    })

    it('should return empty json when region is not there', function(done) {
      var options = {
        host: 'http://localhost:9000',
        regionId: 10
      }
      syncromatics.region(options, function(error, region) {
        assert.equal(null, error);
        assert.deepEqual({}, region);
        done();
      })
    })
  })


  describe('#routes', function(){
    it('should return list of availble routes for the given region', function(done) {
      var options = {
        host: 'http://localhost:9000',
        regionId: 6
      }
      syncromatics.routes(options, function(error, routes) {
        assert.equal(null, error);
        assert.equal(2, routes.length);
        done();
      })
    })
  })


  describe('#route', function(){
    it('should return the specified route', function(done) {
      var options = {
        host: 'http://localhost:9000',
        regionId: 6,
        routeId: 296
      }
      syncromatics.route(options, function(error, routes) {
        assert.equal(null, error);
        assert.equal(296, routes.ID);
        assert.equal('Route B', routes.Name);
        done();
      })
    })
  })


  describe('#waypoints', function(){
    it('should return waypoints with lat lngs', function(done) {
      var options = {
        host: 'http://localhost:9000',
        regionId: 6,
        routeId: 296
      }
      syncromatics.waypoints(options, function(error, waypoints) {
        assert.equal(null, error);
        waypoints.forEach(function(waypoint) {
          assert.equal('number', typeof waypoint.Latitude);
          assert.equal('number', typeof waypoint.Longitude);
        })
        done();
      })
    })
  })


  describe('#stops', function(){
    it('should return stops with lat lngs', function(done) {
      var options = {
        host: 'http://localhost:9000',
        regionId: 6,
        routeId: 296,
        directionId: 0
      }
      syncromatics.stops(options, function(error, stops) {
        assert.equal(null, error);
        stops.forEach(function(stop) {
          assert.equal('number', typeof stop.Latitude);
          assert.equal('number', typeof stop.Longitude);
          assert.equal('string', typeof stop.Name);
        })
        done();
      })
    })
  })


  describe('#vehicles', function(){
    it('should return current vehicles on route', function(done) {
      var options = {
        host: 'http://localhost:9000',
        regionId: 6,
        routeId: 296
      }
      syncromatics.vehicles(options, function(error, vehicles) {
        assert.equal(null, error);
        vehicles.forEach(function(vehicle) {
          assert.equal('number', typeof vehicle.Latitude);
          assert.equal('number', typeof vehicle.Longitude);
          assert.equal('string', typeof vehicle.Name);
          assert.equal('number', typeof vehicle.ID);
        })
        done();
      })
    })
  })

})