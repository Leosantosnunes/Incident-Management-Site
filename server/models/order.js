let mongoose = require('mongoose');

//create an order model class

let Order = mongoose.Schema({
    userID : Number,
    name: String,
    address: String,
    city: String,
    province: String,
    postalCode: String,
    country: String,
    shipped: Boolean,
    cart:{
        lines:
        [
            {
                movie:
                {
                    title: String,
                    overview: String,
                    posterUrl: String,
                    price: Number
                },
                quantity: Number
            }
        ],
        itemCount: Number,
        cartPrice: Number
    }
},
{
    collection: "orders"
});


module.exports = mongoose.model("Order", Order);
