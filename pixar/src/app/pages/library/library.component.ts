import { Component, OnInit } from '@angular/core';
import {BasePageComponent} from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { RestDataSource } from 'src/app/model/rest.datasource';
import { Movie } from 'src/app/model/movie.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent extends BasePageComponent implements OnInit{

  public movies ?: Movie[];  


  constructor(route:ActivatedRoute, dataSource:RestDataSource){
    super(route);
  } 

  override ngOnInit(): void 
  {
    this.displayMovies();
    console.log(this.movies);
    
  }  

  displayMovies(): void
  {
    const userString =  localStorage.getItem('user');        
    if (typeof userString === 'string') {
      const userObject = JSON.parse(userString);
      this.movies = userObject.movies;
    } else {
      console.error('Invalid user data in localStorage.');
    }    
  }
  
           
}
