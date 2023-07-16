export class Movie
{
    constructor(        
        public _id?: number,
        public title?: string,
        public director ?: string,
        public releaseDate ?: string,
        public imdbRating ?: number,
        public posterUrl?: string,
        public price ?: number     
    ){} 
}