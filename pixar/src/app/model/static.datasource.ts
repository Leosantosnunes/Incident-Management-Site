import {Injectable} from '@angular/core';
import {Movie} from './movie.model';
import {Observable, from} from 'rxjs';
import { Order } from './order.model';

@Injectable()
export class StaticDataSource{
    private movies: Movie[] = [];

    getMovies(): Observable<Movie[]>
    {
        return  from([this.movies]);
    }

    saveOrder(order : Order): Observable<Order>
    {
        console.log(JSON.stringify(order));
        return from([order]);
    }

    
}