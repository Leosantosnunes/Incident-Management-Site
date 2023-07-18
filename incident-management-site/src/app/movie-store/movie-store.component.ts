import { Component } from '@angular/core';
import { Movie } from '../model/movie.model';
import { MovieRepository } from '../model/movie.reposity';
import { Cart } from '../model/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-store',
  templateUrl: './movie-store.component.html',
  styleUrls: ['./movie-store.component.css']
})
export class MovieStoreComponent{

  public selectedDirector ?: string = '';
  public moviesPerPage : number = 4;
  public selectedPage : number  = 1;

  constructor(private repository:MovieRepository, private cart:Cart, private router: Router){}
 
  get movies():Movie[]
  {
    const pageIndex = (this.selectedPage -1) * this.moviesPerPage;
    return this.repository.getMovies(this.selectedDirector).slice(pageIndex, pageIndex + this.moviesPerPage)!;
  }

  get directors(): (string|undefined)[]{
    return this.repository.getDirectors();
  }

  changeDirector(newDirector?: string):void{
    this.selectedDirector = newDirector;
  }

  changePage(newPage: number): void{
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number): void{    
    this.moviesPerPage = Number(newSize);
    this.changePage(1);
  } 



  get pageCount(): number{
    return Math.ceil(this.repository.getMovies(this.selectedDirector).length / this.moviesPerPage)
  }

  addMovieToCart(movie: Movie):void{
    this.cart.addLine(movie);
    this.router.navigateByUrl('/cart')
  }

  handleChangePageSize(event: Event): void {
    const newSize = (event.target as HTMLSelectElement).value;
    if (newSize) {
      this.changePageSize(Number(newSize));
    }
  }
}
