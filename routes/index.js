var express = require('express');
var router = express.Router();
var septa_client = require('../javascripts/septa_client')
var route_parser = require('../javascripts/route_parser')

var route = { bus:
   [ { lat: '39.915798',
       lng: '-75.17139400000001',
       label: '5479',
       VehicleID: '5479',
       BlockID: '7061',
       Direction: 'NorthBound',
       destination: 'Noble-12th',
       Offset: '0',
       Offset_sec: '9' },
     { lat: '39.916214',
       lng: '-75.166061',
       label: '8031',
       VehicleID: '8031',
       BlockID: '7057',
       Direction: 'NorthBound',
       destination: 'Noble-12th',
       Offset: '0',
       Offset_sec: '30' },
     { lat: '39.934719',
       lng: '-75.16197200000001',
       label: '8038',
       VehicleID: '8038',
       BlockID: '7060',
       Direction: 'NorthBound',
       destination: 'Noble-12th',
       Offset: '0',
       Offset_sec: '12' },
     { lat: '39.946079',
       lng: '-75.159485',
       label: '8054',
       VehicleID: '8054',
       BlockID: '7059',
       Direction: 'NorthBound',
       destination: 'Noble-12th',
       Offset: '0',
       Offset_sec: '14' },
     { lat: '39.932053',
       lng: '-75.168053',
       label: '8005',
       VehicleID: '8005',
       BlockID: '7056',
       Direction: 'SouthBound',
       destination: 'Broad-Oregon',
       Offset: '1',
       Offset_sec: '71' },
     { lat: '39.955978',
       lng: '-75.158951',
       label: '8442',
       VehicleID: '8442',
       BlockID: '7058',
       Direction: 'SouthBound',
       destination: 'Broad-Oregon',
       Offset: '1',
       Offset_sec: '64' } ] }

/* GET home page. */
router.get('/', function(req, res, next) {
  // septa_client.getRouteInfo(45);
  route_parser.routeParser(route);
  res.render('index', { title: 'Express' });
});

module.exports = router;
