var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

router.get('/logout', indexController.performLogout);

//router.get('/login', indexController.displayUserList);

router.get('/login', indexController.validateToken);

router.post('/login', indexController.processLoginPage);

router.post('/register', indexController.processRegisterPage);

module.exports = router;
