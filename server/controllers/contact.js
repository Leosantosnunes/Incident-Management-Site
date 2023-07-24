let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let jwt = require('jsonwebtoken')

// create a reference to the model
let Contact = require('../models/contact');

/* POST Customer information. */
module.exports.addContactrequest = async(req, res, next) => { 
    //getting data from form 
     
    let newContact = Contact({"name":req.body.pname , 
                    "email":req.body.email, 
                    "message":req.body.message});  
  
    //insert data into the mongoDB
    try{
    let CreatedContact = await Contact.create(newContact);
    console.log(CreatedContact);    
    res.json({success: true, msg: "Successfully Added new contact request"});
    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'An error occurred while fetching contact request.' });
    }
  };
  
