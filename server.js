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
var makeHash = require('./crypto.js'); 

// Sets up the Express app to handle data parsing

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// static directory
app.use(express.static('app/public'));

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

    res.status(200).sendFile(path.join(__dirname + '/public/html/about.html'));
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
	res.redirect('/login/true?'); 
    
    
}); 

app.post('/login/true?' , (req, res) => {
	//set the username and password 
	const username = req.body.Id; 
	const password = req.body.password;
    //creates a hash based on the secret key
	const hash = makeHash(password);
    
	const user = profiles.filter(p=>p.Id === username); 
    
	//lookup in database for the username and password goes here
	Users.findOne({where:{username:username}}).then(function(user){

		// returned response from the databse 
		 var hashFromDatabase = user.password;
		    
	  	if(hash === hashFromDatabase && user){
	  	 	console.log(username , 'authenticated'); 
	  	 	res.redirect('/username/login=true'); 
	  	} else{
	  	 	res.redirect('/'); 
	  	}

	}) 
    
  

}); 

// listen on port 3000
app.listen(PORT, function(){
	console.log("Listening on PORT " + PORT )
})