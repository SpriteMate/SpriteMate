// DEPENDENCIES
// ============

// Initialize Express app
var express = require('express');
var app = express();
var PORT = process.env.PORT || 9001;

var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session'); 
var methodOverride = require('method-override');

var models  = require('./models');
var sequelizeConnection = models.sequelize;

// Sets up the Express app to handle data parsing

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// static directory
app.use(express.static('public'));

//Method Override
app.use(methodOverride('_method'));



// PREPARE OUR TABLES 
// ===============================


// We run this query so that we can drop our tables even though they have foreign keys
// sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

// // note: force:true drops the table if it already exists
// .then(function(){
// 	// return sequelizeConnection.sync({force:true})
// })





// ROUTES
// ======================
//Static Routes
// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

//Handlebars
//========
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/controller.js');
app.use('/', routes);



// listen on port 9001
app.listen(PORT, function(){
	console.log("Listening on PORT " + PORT )
})