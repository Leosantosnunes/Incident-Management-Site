let mongoose = require('mongoose');

//Create Model of Project
const movieModel = mongoose.Schema(
    {         
      title: String,
      overview: String,
      director: String,     
      releaseDate: {
        type: Date,
        get: function (value) {
          // Formatting the date as YYYY-MM-DD
          if (value) {
            return value.toISOString().split('T')[0];
          }
          return null; // or some default value if needed        
        }},
      imdbRating:Number,
      posterUrl:String,
      price: Number      
    },
    {
      collection: "store"
    }
  );
  

module.exports = mongoose.model('Movie', movieModel);