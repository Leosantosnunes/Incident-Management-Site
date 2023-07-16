import { Component } from '@angular/core';
import { Movie } from '../model/movie.model';
import { MovieRepository } from '../model/movie.reposity';

@Component({
  selector: 'app-movie-store',
  templateUrl: './movie-store.component.html',
  styleUrls: ['./movie-store.component.css']
})
export class MovieStoreComponent{
  constructor(private repository:MovieRepository){}
 
  get movies():Movie[]
  {
    return this.repository.getMovies();
  }

  get directors(): (string|undefined)[]{
    return this.repository.getDirectors();
  }
}
