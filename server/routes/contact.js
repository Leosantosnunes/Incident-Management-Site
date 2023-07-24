var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

//connect to model
let Contact = require('../models/contact');
const contact = require('../models/contact');

/* POST Customer information. */
router.post('/', (req, res, next) => { 
  //getting data from form 
  let newContact = Contact({"name":req.body.pname , 
                  "email":req.body.email, 
                  "message":req.body.newmessage});  

  //insert data into the mongoDB
  Contact.create(newContact);
  res.redirect('/');
});

module.exports = router;
