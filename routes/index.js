var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index');
  });
  

let indexController = require('../controllers/index');

router.post('/register', indexController.processLoginPage);

router.get('/logout', indexController.performLogout);

router.post('/login', indexController.processLoginPage);

module.exports = router;
