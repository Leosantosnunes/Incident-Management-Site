import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthModel } from 'src/app/model/auth.model';
import { RestDataSource } from 'src/app/model/rest.datasource';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm ?: FormGroup = new FormGroup([]);
  loginData: any;
  submitted: any;
  error: any;
  loading: any;



  constructor(private fb: FormBuilder,private router: Router,private dataSource: RestDataSource, private auth: AuthModel)
  {

  }

  ngOnInit(): void {
    this.createForm();
    this.submitted = false;
    this.loading = false;
  }

  createForm(){
    this.loginForm = this.fb.group({
      username : ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  // onSubmit(){
  //   this.submitted = true;
  //   if(this.loginForm?.valid){
  //     this.loading=true;
  //     this.loginData = this.loginForm.value;
  //     this.submitted=false;
  //     this.dataSource.setUser(this.loginData['username']);
  //     this.router.navigate(['movieStore']);
  //   }
  //   else{
  //     this.error = "Invalid username or password";
  //     this.loginForm?.reset();
  //   }
  //     this.loading=false;
  //   }
  
};
