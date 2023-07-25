import { Component, OnInit } from '@angular/core';
import {BasePageComponent} from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';

import { RestDataSource } from 'src/app/model/rest.datasource';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BasePageComponent implements OnInit {

  public movies : Movie[] = new Array<Movie>();   


  constructor(route:ActivatedRoute, public dataSource : RestDataSource){
    super(route);

    dataSource.getMovies('movieStore').subscribe(data =>
      {      
      this.movies = data;    
  })
  }
  
  shuffleArray<T>(array: T[]): T[] {
    return array.sort(() => Math.random() - 0.5);    
  }

  override ngOnInit(): void {
    this.movies = this.shuffleArray(this.movies);
    console.log(this.movies);
  }
  

  
}
