import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "./movie.model";
import { Order } from "./order.model";
import {JwtHelperService} from '@auth0/angular-jwt';

const PROTOCOL = 'http';
const PORT = 3500;



@Injectable()
export class RestDataSource
{
    baseUrl: string = '';
    authToken: string = '';

    private httpOptions = 
    {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        })
    };

    constructor(private http: HttpClient, private jwtService: JwtHelperService)
    {
        this.baseUrl = 
        `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getMovies(): Observable<Movie[]>
    {

        return this.http.get<Movie[]>(this.baseUrl + 'movieStore');
    }

    saveOrder(order: Order): Observable<Order>
    {
        return this.http.post<Order>(this.baseUrl + 'orders/add', order);
    }

    getOrders(): Observable<Order[]>
    {
        return this.http.get<Order[]>(this.baseUrl + 'orders');
    }

    private loadToken(): void
    {
      const token = localStorage.getItem('id_token');
      this.authToken = token!;
      this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    }
}