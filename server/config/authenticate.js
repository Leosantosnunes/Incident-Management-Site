let passport = require('passport');
let DB = require('./db.js');

//create a User Model Instance
let userModel = require("../models/user");
let User= userModel.User;

//Strategies
let passportJWT = require('passport-jwt');
let JWTStrategy = passportJWT.Strategy;
let ExtractJWT = passportJWT.ExtractJwt;
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;

//Used to create, sign, and verify tokens
let jwt = require('jsonwebtoken');

// Local strategy with passport mongoose plugin User.authenticate() function
passport.use(new localStrategy(User.authenticate()));

//serialize and deserialize the User info

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = function(user) {
    // This helps us to create the JSON Web Token
    return jwt.sign(user, DB.Secret,{expiresIn: 3600});
 };

// Options to specify for my JWT based strategy.
var opts = {};
 
// Specifies how the jsonwebtoken should be extracted from the incoming request message
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
 
//Supply the secret key to be using within strategy for the sign-in.
opts.secretOrKey = DB.Secret;

// JWT Strategy
exports.jwtPassport = passport.use(new JWTStrategy(opts,
    // The done is the callback provided by passport
    async (jwt_payload, done) => {
      
        try {
            const user = await User.findOne({ _id: jwt_payload._id });
            if (user) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          } catch (err) {
            return done(err, false);
          }
    }));


exports.verifyUser = passport.authenticate('jwt', {session: false});