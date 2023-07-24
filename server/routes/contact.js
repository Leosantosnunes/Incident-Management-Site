let express= require("express");
let router = express.Router();

let jwt = require("jsonwebtoken");

let passport = require("passport");

let contactController = require("../controllers/contact");

/* POST Customer information. */
router.post('/request',contactController.addContactrequest);

module.exports = router;
