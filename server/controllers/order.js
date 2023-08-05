let express = require('express');
let Order = require("../models/order");
let Store = require("../models/store");
let Cart = Store.Cart;
let Movie = require("../models/movie");
let UserModel = require("../models/user")
let User= UserModel.User;


//Display All Orders
module.exports.displayOrderList = async(req,res,next) => {
    try{
    displayList = await Order.find();
    res.json(displayList);
    }
    catch(err){
        console.error(err);
    } 
    };


module.exports.processAddPage = async(req,res,next) => {
    //Serialize the cart data
    
    let cart = new Cart();

    let movieID = req.body.userID;       
    const AddMovie = await User.findById(movieID);   

    //Serialize the Line data
    for(let line of req.body.cart.lines){
        let movie = new Movie(line.movie);           
        let quantity = line.quantity;
        cart.lines.push({movie, quantity}); 
        AddMovie.movies.push(movie);
    }    
    
    //Add the movie to the User Account
    try{
        await AddMovie.save();        
        console.log(AddMovie);        
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: 'An error occurred while fetching movie information.' });
    }

    cart.itemCount = req.body.cart.itemCount;
    cart.cartPrice = req.body.cart.cartPrice;

    let newOrder = Order({
        "title": req.body.title,
        "name": req.body.name,
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
        //console.log(createdOrder);
        res.json({success: true, msg: "Successfully Added new Order"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: 'An error occurred while fetching movie list.' });
    }       
}