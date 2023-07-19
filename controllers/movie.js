let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//create the User Model instance

let userModel = require('../models/user');
let User= userModel.User;