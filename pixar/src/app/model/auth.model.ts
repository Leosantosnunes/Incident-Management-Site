import { Injectable } from "@angular/core";


@Injectable()
export class AuthModel
{   
    username ?: String;
    email ?: String;    
    created ?: Date;
    update ?: Date;
    public message ?: string;

    constructor()
    {
        this.username = '',
        this.email = '',
        this.created = new Date(),
        this.update = new Date(),
        this.message = 'Welcome' + this.username
    }
}