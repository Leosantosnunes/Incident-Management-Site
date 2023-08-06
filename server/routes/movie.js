let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

let movieController = require('../controllers/movie')

let jwt = require('jsonwebtoken');

/* GET Route for the Movie List page - READ Operation */
router.get('/', movieController.displayMovieList);


/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', passport.authenticate('jwt', {session: false}), movieController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', passport.authenticate('jwt', {session: false}), movieController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', passport.authenticate('jwt', {session: false}), movieController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', passport.authenticate('jwt', {session: false}), movieController.performDelete);

module.exports = router;