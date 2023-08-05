var express = require('express');
var router = express.Router();
let passport = require('passport');

// Parse Json
const bodyParser = require('body-parser');
router.use(bodyParser.json());

// Get our authenticate module
var authenticate = require('../config/authenticate');

let indexController = require('../controllers/index');

router.get('/logout', indexController.performLogout);

router.get('/login',authenticate.verifyUser, indexController.displayUserList);

router.post('/login',passport.authenticate('local'), indexController.processLoginPage);

router.post('/register', indexController.processRegisterPage);

router.get('/library/:_id', indexController.getCurrentUserWithMovies);

module.exports = router;
