import {Injectable} from '@angular/core';
import {Movie} from './movie.model';
import {StaticDataSource} from './static.datasource';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class MovieRepository
{
    private movies : Movie[] = new Array<Movie>();
    public directors : (string | undefined)[] = []

    constructor
    (
      private dataSource: RestDataSource  
    )
    {
        dataSource.getMovies().subscribe(data =>
            {
            this.movies = data;            
            this.directors = data.map(b => b.director).filter((a,index,array) => array.indexOf(a) === index).sort();
        })
     }
    //director:string = null
    getMovies(director:(string) = ''): Movie[]
    {
        return this.movies.filter(b => director == '' || director == b.director);
    }
    getMovie(id:number): Movie
    {
        //no "!"
        return this.movies.find(b => b._id == id)!;
    }
    getDirectors(): (string | undefined)[]
    {
        return this.directors;
    }
};