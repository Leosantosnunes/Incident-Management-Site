"use strict"

class Movie
{
     constructor(id= '', title = '', overview = '', price = 0)
     {
        this._id = id;
        this.title = title;
        this.overview = overview;
        this.price = price;
     }

     toString(){
        return "_id : " + this._id + "\n" + "title :" + this.title+ "\n" + "overview :" + this.overview + "\n" + "price :" + this.price
     }
}

class Line 
{
    constructor(movie = new Movie(), quantity = 1){
        this.movie = movie,
        this.quantity = quantity
    }

    toString(){
        return "{" + this.movie.toString() + "}" + "\n" + "quantity: " + this.quantity
    }

    total(){
        return this.movie.price * this.quantity;
    }
}

class Cart{
    constructor(lines = [], itemCount = 0,cartPrice = 0){
        this.lines = lines;
        this.itemCount = itemCount;
        this.cartPrice = cartPrice;
    }

    toString(){
        let outputString = '';
        let count = 0;

        for(let line of this.lines){
            outputString += "(" + line.toString();
            count++;
            outputString += (count > this.lines.length) ? "}, \n": "} \n"};
            outputString += ", itemCount: " + this.itemCount + "\n";
            outputString += ", cartPrice: " + this.cartPrice;
            return outputString;
    }


    addListener(line){
        this.lines.push(line);
        this.cartPrice += line.total();
    }

    empty(){
        this.lines =[];    
        this.itemCount = 0;
        this.cartPrice = 0;
    }
}

module.exports.Cart = Cart;
module.exports.Line = Line;
module.exports.Movie = Movie;

