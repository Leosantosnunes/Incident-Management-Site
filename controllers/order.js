let express = require('express');
let router = express.Router();
let Order = require("../models/order");
let Store = require("../models/store");
let Cart = Store.Cart;
let Movie = Store.Movie;

module.exports.displayOrderList = (req,res,next) => {
    Order.find((err, orderList) => {
        if(err){
            return console.error(err);
        }
        else{
            res.json(orderList);
        }

    });
}

module.exports.processAddPage = async(req,res,next) => {
    //Serialize the cart data
    
    let cart = new Cart();

    //Serialize the Line data
    for(let line of req.body.cart.lines){
        let movie = new Movie(
            line.movie._id,
            line.movie.title,
            line.movie.overview,
            line.movie.price
        );
        let quantity = line.quantity;
        cart.lines.push({movie, quantity});
    }

    cart.itemCount = req.body.cart.itemCount;
    cart.cartPrice = req.body.cart.cartPrice;

    let newOrder = Order({
        "title": req.body.title,
        "address": req.body.address,
        "city": req.body.city,
        "province": req.body.province,
        "postalCode": req.body.postalCode,
        "country" : req.body.country,
        "shipped": req.body.shipped,
        "cart": cart
    });

    //Add new Order Object to the Database
    try{
        const createdOrder = await Order.create(newOrder);
        console.log(createdOrder);
        res.json({success: true, msg: "Successfully Added new Order"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: 'An error occurred while fetching movie list.' });
    }       
}