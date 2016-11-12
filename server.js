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
var makeHash = require('./crypto.js'); 



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

//for serving front-end static content 
app.use(express.static(path.join(__dirname, 'public')));


//home route , serves the index.html file 
app.get('/', (req, res) =>  {

    res.status(200).sendFile(path.join(__dirname + '/index.html')); 
});

//serves the signup page 
app.get('/about', (req, res) =>  {

    res.status(200).sendFile(path.join(__dirname + '/public/html/signup.html'));
});

//serves the signup page 
app.get('/signup', (req, res) =>  {

    res.status(200).sendFile(path.join(__dirname + '/public/html/signup.html'));
});

//standard route for posting profile data to the server ;adds new profiles 
app.post('/signup/new/' , (req, res) =>{
    
	let newProfile = req.body;

	//sets the username and password for storage 
	const username = newProfile.Id; 
	const password = newProfile.password; 
	const hash = makeHash(password); 
    
	//removes the password from the obj 
	delete newProfile.password; 
    
	//insert in the database goes here 
    
    

	console.log(newProfile); 
    
	if(!newProfile.password){
		profiles.unshift(newProfile); 
	}else{
		res.send('error in creating account'); 
	}
	//redirect user to login 
	res.redirect('/login'); 
    
    
}); 



// listen on port 3000
app.listen(9001, function(){
	console.log("Listening on port 9001")
})