var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

router.post('/register', indexController.processLoginPage);

router.get('/logout', indexController.performLogout);

router.post('/login', indexController.processLoginPage);

module.exports = router;
