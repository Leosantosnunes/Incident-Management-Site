let express= require("express");
let router = express.Router();

let jwt = require("jsonwebtoken");

let passport = require("passport");

let orderController = require("../controllers/order");


/*GET Order List page -- READ Operation*/
router.get('/', orderController.displayOrderList);

/* POST Route for processing the add order*/

router.post('/add', orderController.processAddPage);

/* POST Route for processing the delete order*/

router.get('/delete/:id', passport.authenticate('jwt', {session: false}), orderController.performDelete);

module.exports = router;
