import {Injectable} from '@angular/core';
import {Movie} from './movie.model';
import {Observable, from} from 'rxjs';

@Injectable()
export class StaticDataSource{
    private movies: Movie[] = [
        new Movie(1, 'Toy Story','John Lasseter','November 22, 1995', 8.3,'01_ts.jpg' ),
        new Movie(2, 'Toy Stdaory','John Lasseter','Novdaember 22, 1995', 8.3,'01_ts.jpg' ),
        new Movie(3, 'Toy Sadtory','John Lasseter','November 22, 1995', 8.3,'01_ts.jpg' ),
        new Movie(4, 'Toy Story','Johasdn Lasseter','November 22, 1995', 8.3,'01_ts.jpg' ),
        new Movie(5, 'Toy Story','John Lasseter','November 22, 1995', 8.3,'01_ts.jpg' ),
        new Movie(6, 'Toy Sadtory','John Lasseter','Novasdember 22, 1995', 8.3,'01_ts.jpg' ),
        new Movie(7, 'Toy Story','John Lasseter','November 22, 1995', 8.3,'01_ts.jpg' ),
        new Movie(8, 'Toy Story','John Lasseter','November 22, 1995', 8.3,'01_ts.jpg' ),
        new Movie(9, 'Toy Story','John Lasseter','Novasdember 22, 1995', 8.3,'01_ts.jpg' ),
    ];

    getMovies(): Observable<Movie[]>
    {
        return  from([this.movies]);
    }
}