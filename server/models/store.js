"use strict"

let movieModel = require('./movie');



class Line 
{
    constructor(movie = new movieModel(), quantity = 1){
        this.movie = movie,
        this.quantity = quantity
    }
}

class Cart{
    constructor(lines = [], itemCount = 0,cartPrice = 0){
        this.lines = lines;
        this.itemCount = itemCount;
        this.cartPrice = cartPrice;
    } 
}

module.exports.Cart = Cart;
module.exports.Line = Line;
