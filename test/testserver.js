var express = require('express');
var app = express();

app.get('/regions', function(req, res) {
  res.json([
    { ID: 6, Name: 'Downtown DASH' },
    { ID: 7, Name: 'Community DASH' },
    { ID: 8, Name: 'Commuter Express' }
  ])
})

app.get('/region/:regionId/routes', function(req, res) {
  res.json([
    {
      "ID":409,
      "ArrivalsEnabled":true,
      "DisplayName":"A Route A",
      "CustomerID":27,
      "DirectionStops":null,
      "Points":null,
      "Color":"#5F93BF",
      "TextColor":"#FFFFFF",
      "ArrivalsShowVehicleNames":true,
      "IsHeadway":false,
      "ShowLine":true,
      "Name":"Route A",
      "ShortName":"A",
      "RegionIDs":[6],
      "ForwardDirectionName":"Forwards",
      "BackwardDirectionName":"Backwards",
      "NumberOfVehicles":0,"Patterns":null
    },
    {
      "ID":296,
      "ArrivalsEnabled":true,
      "DisplayName":"B Route B",
      "CustomerID":27,
      "DirectionStops":null,
      "Points":null,
      "Color":"#703E7E",
      "TextColor":"#FFFFFF",
      "ArrivalsShowVehicleNames":true,
      "IsHeadway":false,
      "ShowLine":true,
      "Name":"Route B",
      "ShortName":"B",
      "RegionIDs":[6],
      "ForwardDirectionName":"Forwards",
      "BackwardDirectionName":"Backwards",
      "NumberOfVehicles":0,
      "Patterns":null
    }
  ])
})

app.get('/route/:routeId/waypoints', function(req, res) {
  res.json([
    [
      {"Latitude":34.0504237856547,"Longitude":-118.254223465919},
      {"Latitude":34.0516060576154,"Longitude":-118.25607419014},
      {"Latitude":34.0510860377689,"Longitude":-118.25657844543504},
      {"Latitude":34.050792691833,"Longitude":-118.256873488426},
      {"Latitude":34.0501704395181,"Longitude":-118.257468938828},
      {"Latitude":34.04866812582101,"Longitude":-118.25878322124481},
      {"Latitude":34.0483569924382,"Longitude":-118.25827896595},
      {"Latitude":34.0471080026537,"Longitude":-118.256331682205},
      {"Latitude":34.046552396303447,"Longitude":-118.25551092624664},
      {"Latitude":34.0467879738405,"Longitude":-118.255296349525}
    ]
  ])
})

app.get('/route/:routeId/direction/:directionId/stops', function(req, res) {
  res.json([
  {
    "ID":42296,"Image":"stop_sign_medium.gif",
    "Latitude":34.0504237856547,"Longitude":-118.254223465919,
    "Name":"5th \u0026 Grand (NW Corner)","RtpiNumber":6002,"ShowLabel":false,
    "ShowStopRtpiNumberLabel":false,"ShowVehicleName":true
  },
  {
    "ID":42467,"Image":"stop_sign_medium.gif",
    "Latitude":34.0510860377689,"Longitude":-118.25657844543504,
    "Name":"Flower \u0026 5th (Southbound)","RtpiNumber":6021,
    "ShowLabel":false,"ShowStopRtpiNumberLabel":false,
    "ShowVehicleName":true
  },
  {
    "ID":90794,"Image":"stop_sign_medium.gif",
    "Latitude":34.0483569924382,"Longitude":-118.25827896595,
    "Name":"7th \u0026 Flower (Eastbound)","RtpiNumber":6081,
    "ShowLabel":false,"ShowStopRtpiNumberLabel":false,"ShowVehicleName":true
  }])
})

app.get('/route/:routeId/vehicles', function(req, res) {
  res.json([
    {
      "ID":330,"APCPercentage":65,"RouteId":296,"PatternId":296,
      "Name":"02022","HasAPC":true,"IconPrefix":"","DoorStatus":0,
      "Latitude":34.055178,"Longitude":-118.242723,
      "Coordinate":{"Latitude":34.055178,"Longitude":-118.242723},
      "Speed":0,"Heading":"E","Updated":"3:51:34P","UpdatedAgo":"16s ago"
    },
    {
      "ID":328,"APCPercentage":0,"RouteId":296,"PatternId":296,
      "Name":"02020","HasAPC":true,"IconPrefix":"","DoorStatus":1,
      "Latitude":34.053983,"Longitude":-118.255758,
      "Coordinate":{"Latitude":34.053983,"Longitude":-118.255758},
      "Speed":0,"Heading":"SW","Updated":"6:32:19P Tue 3/11","UpdatedAgo":""
    }
  ])
})

module.exports = app;