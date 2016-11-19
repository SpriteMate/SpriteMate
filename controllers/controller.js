var express = require('express');
var router = express.Router();
var models = require('../models');
var makeHash = require('../crypto.js'); 

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
		var data =  models.Sprites.findAll().then(function(data){
			var hbsObject = { Sprites: data };
			console.log(hbsObject);
			res.render('gallery', hbsObject);

	});
});

//
router.get('/users', function (req, res) {
	var data =  models.Users.findAll().then(function(data){
		var hbsObject = { Users: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

//route for the signup template
router.get('/signup' , function(req, res){
    res.render('signup'); 
})

//route for the login template 
router.get('/login' , function(req, res){
    res.render('login'); 
})

//route for an incorrect login 
router.get('/login=false' , function(req, res){
    res.render('loginfalse'); 
})


//creates the new account on the server and adds it to the database  
router.post('/signup/new/' , (req, res) =>{    
	var newProfile = req.body;

	console.log(newProfile); 
    
	//sets the username and password for storage 
	const username = newProfile.Id; 
	const password = newProfile.password; 
	const hash = makeHash(password);
    
    //sets userpassword = hash 
    newProfile.password = hash; 
    

    models.Users.create(newProfile); 

         
}); 

//route to check whether the login is true 
router.post('/login=true?' , (req, res) => {
	//set the username and password 
	const username = req.body.Id; 
	const password = req.body.password;
    //creates a hash based on the secret key
	const hash = makeHash(password);

	console.log(hash); 
    
    //lookup in the database to authenticate the user 
    Users.findOne({where:{UserName:username}}).then(function(user){
        //for debugging
        console.log(user)
        if(user && hash === user.password){
            res.redirect('/gallery'); 
        }else{
            //redirects user to the failed login route 
            res.redirect('login=false'); 
        } 
    }) 

}); 

module.exports = router;