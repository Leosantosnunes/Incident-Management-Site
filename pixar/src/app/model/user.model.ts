import { Injectable } from "@angular/core";


//@Injectable()
export class User
{   
    username ?: String;
    password ?: String;
    displayName ?: String;
    email ?: String;
    _id?: number;
    title?: string;
    overview ?: string;
    director ?: string;
    releaseDate ?: Date;
    imdbRating ?: number;
    posterUrl?: string;
    price ?: number 
    

    constructor(){}
      
}