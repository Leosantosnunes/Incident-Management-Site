import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "./movie.model";
import { Order } from "./order.model";
import { Contact } from "./contact.model";
import { Cart } from "./cart.model";
import { User } from "./user.model";
import { map } from "rxjs";
import {JwtHelperService} from '@auth0/angular-jwt';

const PROTOCOL = 'http';
const PORT = 3500;



@Injectable()
export class RestDataSource
{
    user ?: User = new User();
    baseUrl: string = '';
    authToken : string = '';

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
        this.user = new User();
        this.baseUrl = 
        `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getMovies(address: String): Observable<Movie[]>
    {

        return this.http.get<Movie[]>(this.baseUrl + address);
    }

    saveOrder(order: Order): Observable<Order>
    {
        return this.http.post<Order>(this.baseUrl + 'orders/add', order);
    }

    authenticate(user:User): Observable<any>
    {        
        return this.http.post<any>(this.baseUrl + 'login', user,this.httpOptions);
        
    }

    storeUserData(token:any, user: User): void
    {
        localStorage.setItem('id_token', 'Bearer ' + token);
        localStorage.setItem('user', JSON.stringify(user)); 
        console.log(token);       
        this.user = user;
    }

    logout(): Observable<any>
    {
        this.authToken = null!;
        this.user = null!;
        localStorage.clear();
        
        return this.http.get<any>(this.baseUrl + 'logout', this.httpOptions);
    }

    loggedIn():Boolean
    {
        return !this.jwtService.isTokenExpired(this.authToken);
    }

    getOrders(): Observable<Order[]>
    {
        this.loadToken();
        return this.http.get<Order[]>(this.baseUrl + 'orders');
    }

    saveContact(contact: Contact): Observable<Contact>
    {
        return this.http.post<Contact>(this.baseUrl + 'contact/request', contact);
    }

    getContacts(): Observable<Contact[]>
    {
        return this.http.get<Contact[]>(this.baseUrl + 'contact')
    }

    private loadToken(): void
    {
      const token = localStorage.getItem('id_token');
      this.authToken = token!;
      this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    }
}