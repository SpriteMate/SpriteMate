var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res) {
	res.redirect('/home');
});

router.get('/home', function (req, res) {
		res.render('home');
});

router.get('/sandbox', function (req, res) {
		res.render('sandbox');
});

router.get('/gallery', function (req, res) {
		res.render('gallery');
});

router.get('/users', function (req, res) {
	var data =  models.Users.findAll().then(function(data){
		var hbsObject = { Users: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});


module.exports = router;