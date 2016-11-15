var models  = require('../models');
var sequelizeConnection = models.sequelize;

module.exports = function(app){

	app.get('/api/users/', function(req, res){
			var data =  models.Users.findAll().then(function(data){
				res.json(data);
				console.log(data); 
			});
	});

	app.get('/api/sprites/', function(req, res){
			var data =  models.Sprites.findAll().then(function(data){
				res.json(data); 
				console.log(data); 

			});
	});
}

