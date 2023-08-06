let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let jwt = require('jsonwebtoken')

// create a reference to the model
let Movie = require('../models/movie');

module.exports.displayMovieList = async (req, res, next) => {
    try {
        const movieList = await Movie.find();
        res.json(movieList);
    } catch (err) {
        console.error(err);
        // Handle the error appropriately (e.g., send an error response)
        res.status(500).json({ error: 'An error occurred while fetching movie list.' });
    }
};

module.exports.displayAddPage = (req, res, next) => {   
    res.json({success: true, msg: 'Succesfully Displayed Add Page'});
}

module.exports.processAddPage = async(req, res, next) => {
    let newMovie = Movie({
        "title": req.body.title,
        "overview": req.body.overview,
        "director": req.body.director,
        "release_date": req.body.release_date,
        "imdbRating": req.body.imdbRating,
        "price": req.body.price,
        "posterUrl": req.body.posterUrl
        
    });
    console.log(newMovie);
    try
    {
        await Movie.create(newMovie);
        res.json({success: true, msg: 'Successfully Added New Movie'});
        
    }
    catch(err)
    {         
        console.log(err);
        res.status(400).json({ error: 'Failed to add a new movie.' });      
    };

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Movie.findById(id, (err, movieToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Successfully Displayed Movie to Edit', movie: movieToEdit});
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedMovie = Movie({
        "title": req.body.title,
        "overview": req.body.overview,
        "director": req.body.director,
        "release_date": req.body.release_date,
        "imdbRating": req.body.imdbRating,
        "price": req.body.price,
        "posterUrl": req.body.posterUrl
    });

    Movie.updateOne({_id: id}, updatedMovie, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {            
            res.json({success: true, msg: 'Successfully Edited Movie', movie: updatedMovie});
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Movie.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Successfully Deleted Movie'});
        }
    });
}