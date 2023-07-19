let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//create the User Model instance

let userModel = require('../models/user');
let User= userModel.User;

module.exports.displayLoginPage = (req,res,next) => {
    //check if the user is already logged in
    if(!req.user)
    {
        res.render('auth/login',
        {
            title:"Login",
            message:req.flash("loginMessage"),
            displayName:req.user ? req.user.displayName : ''
        })
    }
    else{
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req,res,next) => {
    passport.authenticate('local',(err,user,info) => {
        //server errr?
        if(err)
        {
            return next(err)
        }
        //is there a user login error?
        if(!user)
        {
            req.flash('loginMessage','Authentication Error');
            return res.redirect('/login');            
        }
        req.login(user,(err) => {
            //server error?
            if(err){
                return next(err);
            }
            return res.redirect('/movieStore');
        })
    })(req,res,next);
}

module.exports.displayRegisterPage