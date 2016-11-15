// Dependencies
// ====================
var path 		= require('path');


// Routes
// ====================
module.exports = function(app){
	
	// index route loads view.html
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

	// add route loads the add.html page, 
	// where users can enter new characters to the db
	app.get('/sandbox', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/sandbox.html'));
	});

	// all route loads the all.html page, 
	// where all characters in the db are displayed
	app.get('/gallery', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/gallery.html'));
	});

}
