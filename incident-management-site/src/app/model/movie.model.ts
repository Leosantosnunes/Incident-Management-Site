export class Movie
{
    constructor(
        public _id?: number,
        public title?: string,
        public director?: string,
        public releaseDate ?: String,
        public imdbRating ?: number,
        public posterUrl?: string     
    ){} 
}