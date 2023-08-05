import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../model/auth.service";



@Component({
    templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit
{
    constructor(private auth: AuthService,
        private router: Router) {console.log('test')}   

    ngOnInit(): void {
        let test = this.auth.authenticated;
          console.log(test);
    } 

    logout(): void
    {
        this.auth.logout();

        this.router.navigateByUrl('/home')
    }
}