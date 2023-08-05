import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieRepository } from 'src/app/model/movie.reposity';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent {

  constructor(private repository: MovieRepository,
    private router: Router) { }

  ngOnInit(): void {
  }

  getMovies(): Movie[]
  {
    console.log(this.repository.getMovies());
    return this.repository.getMovies();
  }

  deleteMovie(id: number): void
  {
    if (confirm('Are you sure?') && (id !== undefined))
    {
      this.repository.deleteMovie(id);
    }
    else
    {
      window.location.reload(); // refresh fix
      this.router.navigateByUrl('/admin/movies');
    }
    }

  addMovie(): void
  {
  this.router.navigateByUrl('/admin/movies/add');
  }

  editMovie(id : number): void
  {
  this.router.navigateByUrl('/admin/movies/edit/' + id);
  }

  handleCRUD(event: Event, action: String): void {
    const method = (event.target as HTMLSelectElement).value;
    if (method == '') {
      
    }
    else{  
      if(action = "edit") 
      {     
      this.editMovie(Number(method));
      }
      else if(action = "remove")
      {
        this.deleteMovie(Number(method));
      }
    }
  } 

}


