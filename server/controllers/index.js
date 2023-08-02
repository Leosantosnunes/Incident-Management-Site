let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let DB = require('../config/db');

// Parse Json
const bodyParser = require('body-parser');
router.use(bodyParser.json());

let userModel = require("../models/user");
let User= userModel.User;

// Get our authenticate module
var authenticate = require('../config/authenticate');

module.exports.displayUserList = async(req,res,next) => {
    try{
    users = await User.find();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    // format result as json
    res.json(users);
    }
    catch(err){
        console.error(err);
    }      

    };

module.exports.processLoginPage = (req, res) => {
 
 // Create a token
 var token = authenticate.getToken({_id: req.user._id});
 
 // Response
 res.statusCode = 200;
 res.setHeader('Content-Type', 'application/json');
 res.json({success: true, token: token, status: 'You are successfully logged in!'});
};



/*module.exports.processRegisterPage = (req, res, next) => {
    // instantiate a user object
    let newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        displayName: req.body.displayName               
    });

    User.register(newUser, req.body.password, (err) => {
        if(err)
        {
            console.log("Error: Inserting New User");
            if(err.name == "UserExistsError")
            {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User Already Exists!')
            }
            res.json({success: true, msg: "Successfully Registered User"});
        }
        else
        {
            // if no error exists, then registration is successful

            // redirect the user and authenticate them

            return res.json({success: true, msg: 'User Registered Successfully!'});
        }
    });
}*/

module.exports.processRegisterPage = (req, res, next) => {
    
    let newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        displayName: req.body.displayName               
    });

    // Create User
    User.register(newUser,
      req.body.password, (err, user) => {
      if(err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({err: err});
      }
      else {
        // Use passport to authenticate User
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Registration Successful!'});
        });
      }
    });
   };



module.exports.performLogout = (req, res, next) => {
    req.logout();
    //res.redirect('/');
    res.json({success: true, msg: 'User Successfully Logged out!'});
}