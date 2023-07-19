import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";


@Injectable()
export class Order 
{
    public _id ?: number;
    public name ?: string;
    public address ?: string;
    public city ?: string;
    public province ?: string
    public postalCode ?: string;
    public country ?: string
    public shipped = false;
    
    constructor(public cart:Cart){}

    clear(): void
    {
        this._id = undefined;
        this.name = '' ;
        this.address = '';
        this.city = '';
        this.province = '';
        this.postalCode = '';
        this.country = '';
        this.shipped = false;
        this.cart.clear();
    }


}