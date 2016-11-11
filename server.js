// DEPENDENCIES
// ============

// Initialize Express app
var express = require('express');
var app = express();

var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session'); 
var methodOverride = require('method-override');

var models  = require('./models');
var sequelizeConnection = models.sequelize;



// PREPARE OUR TABLES 
// ===============================


// We run this query so that we can drop our tables even though they have foreign keys
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

// note: force:true drops the table if it already exists
.then(function(){
	return sequelizeConnection.sync({force:true})
})





// ROUTES
// ======================




// listen on port 3000
app.listen(9001, function(){
	console.log("Listening on port 9001")
})