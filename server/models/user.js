//require modules for the user Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    { 
        username:
        {
            type: String,
            default:"",
            trim: true,
            required: "username is required"
        },
        /*password:
        {
            type: String,
            default: '',
            trim: true,
            required: 'password is required'
        },*/
        displayName:
        {
            type: String,
            default: '',
            trim: true,
            required: 'displayName is required'
        },
        email:
        {
            type: String,
            default: "",
            trim: true,
            required: "email address is required"
        },
        movies:[{title: String,
            overview: String,
            director: String,     
            releaseDate: {
              type: Date,
              get: function (value) {
                // Formatting the date as YYYY-MM-DD
                return value.toISOString().split('T')[0];
              }},
            imdbRating:Number,
            posterUrl:String,
            price: Number}],
        created:
        {
            type: Date,
            default: Date.now
        },
        update:
        {
            type: Date,
            default: Date.now
        }
    },
    {
        collection:"users"
    }   
);

// configure options for User Model

let options = ({missingPasswordError: "Wrong/ Missing Password"});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);