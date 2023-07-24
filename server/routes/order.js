let express= require("express");
let router = express.Router();

let jwt = require("jsonwebtoken");

let passport = require("passport");

let orderController = require("../controllers/order");

function requireAuth(req, res, next){
    //check if user is logged in
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}

/*GET Order List page -- READ Operation*/
router.get('/', orderController.displayOrderList);

/* POST Route for processing the add order*/

router.post('/add', orderController.processAddPage);

module.exports = router;
