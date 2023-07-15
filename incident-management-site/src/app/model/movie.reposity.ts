import {Injectable} from '@angular/core';
import {Movie} from './movie.model';
import {StaticDataSource} from './static.datasource';

@Injectable()
export class MovieRepository
{
    private movies: Movie[] = new Array<Movie>();
    private directors: string[] = new Array<string>();

    constructor
    (
      private dataSource: StaticDataSource  
    )
    {
        dataSource.getMovies().subscribe(data =>
            {
            this.movies = data;
            //this.directors = ...
            var directors = data.map(b=> b.director).filter((a,index,array) => array.indexOf(a) === index).sort();
        })
    }
    //director:string = null
    getMovies(director:string = ''): Movie[]
    {
        return this.movies.filter(b => director == null || director == b.director);
    }
    getMovie(id:number): Movie
    {
        //no "!"
        return this.movies.find(b => b._id == id )!;
    }
    getDirectors(): String[]
    {
        return this.directors;
    }
};