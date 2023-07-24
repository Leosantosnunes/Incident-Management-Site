let mongoose = require('mongoose');

//Create Model of Contact
let contactModel = mongoose.Schema(
    {
        "name" : String,
        "email" : String,
        "message" : String        
    },
    {
        collection: "contact"
    }
);

module.exports = mongoose.model('Contact', contactModel);