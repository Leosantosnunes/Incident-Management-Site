import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user: User = new User();



  constructor(private authService:AuthService, private router: Router){}

  ngOnInit(): void {
    this.user= new User();    
  }

  onLogoutClick(): void
  {
    this.authService.logout()
    this.router.navigate(['home']);
  }

  isLoggedIn(): Boolean
  {
    const result = this.authService.authenticated;    
    if (result)
    {
      this.user = JSON.parse(localStorage.getItem('user')!);
    }
    return result;
  }
}
