import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "./movie.model";
import { Order } from "./order.model";

const PROTOCOL = 'http';
const PORT = 3500;


@Injectable()
export class RestDataSource
{
    baseUrl: string = '';

    constructor(private http: HttpClient)
    {
        this.baseUrl = 
        `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getMovies(): Observable<Movie[]>
    {

        return this.http.get<Movie[]>(this.baseUrl + 'movie-list');
    }

    saveOrder(order: Order): Observable<Order>
    {
        return this.http.post<Order>(this.baseUrl + 'orders', order);
    }
}