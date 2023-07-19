let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

let movieController = require('../controllers/movie')

//helper function for guard purposes
function requireAuth(req,res,next)
{
    //check if the user is logged in
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }next();
}