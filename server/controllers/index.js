let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// enable jwt
let jwt = require('jsonwebtoken');
let DB = require('../config/db');

// create the User Model instance
let userModel = require('../models/user');
let User = userModel.User; // alias

module.exports.displayUserList = async(req,res,next) => {
    try{
    displayList = await User.find();
    res.json(displayList);
    }
    catch(err){
        console.error(err);
    }      

    };

module.exports.processLoginPage = (req, res, next) => {    
    passport.authenticate('jwt',
    (err, user, info) => {
        
        // server err?
        if(err)
        {
            return next(err);
        }
        // is there a user login error?
        if(!user)
        {
            if (info.name === 'TokenExpiredError') {
                return res.status(403).send(info.name);
            }
            else {
                return res.status(401).send(info.message);}
        }
        req.login(user, (err) => {
            // server error?
            if(err)
            {
                return next(err);
            }

            const payload = 
            {
                id: user._id,
                username: user.username,
                email: user.email
            }

            const authToken = jwt.sign(payload, DB.Secret, {
                expiresIn: 604800 // 1 week
            });
            
            return res.json({success: true, msg: 'User Logged in Successfully!', user: {
                id: user._id,                
                username: user.username,
                email: user.email
            }, token: authToken});            
        });
    })(req, res, next);
}

module.exports.processRegisterPage = (req, res, next) => {
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
}

module.exports.validateToken = (req, res, next) => {
    // Extract the token from the Authorization header
    const token = req.header('Authorization')?.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ success: false, message: 'Token not provided' });
    }
  
    try {
      // Verify the token using the secret key
      const decoded = jwt.verify(token, DB.Secret);
  
      // The decoded object will contain the payload of the token, including user information
      // You can access the user ID, username, email, etc. using decoded.id, decoded.username, decoded.email, etc.
  
      // Optionally, you can attach the decoded payload to the request object for further use in other routes
      req.user = decoded;
  
      // Move to the next middleware or route handler
      next();
    } catch (err) {
      // If the token is invalid or expired, an error will be thrown
      return res.status(401).json({ success: false, message: 'Invalid token' });
    }
  }

module.exports.performLogout = (req, res, next) => {
    req.logout();
    //res.redirect('/');
    res.json({success: true, msg: 'User Successfully Logged out!'});
}