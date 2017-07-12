var express = require('express');
var router = express.Router();
var septa_client = require('../app_javascripts/septa_client')

/* GET home page. */
router.get('/', function(req, res, next) {
  septa_client.get47();
  septa_client.get45();
  res.render('index', { title: 'Express' });
});

module.exports = router;
