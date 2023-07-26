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

  public selectedFilter : any = '';
  public selectedYear : number = 0;
  public moviesPerPage : number = 9;
  public selectedPage : number  = 1;

  constructor(private repository:MovieRepository, private cart:Cart, private router: Router){}
 
  get movies():Movie[]
  {
    const pageIndex = (this.selectedPage -1) * this.moviesPerPage;
    return this.repository.getMovies(this.selectedFilter).slice(pageIndex, pageIndex + this.moviesPerPage)!;
  }

  get directors(): (string|undefined)[]{
    return this.repository.getDirectors();
  }

  get prices(): (number|undefined)[]{
    return this.repository.getPrice();
  }

  // get releaseYear(): (number|undefined)[]{
  //   return this.repository.getReleaseYear();
  // }

  changeFilter(newFilter?: any):void{
    this.selectedFilter = newFilter!;
  }

    //Filter by director

  handleChangeDirector(event: Event): void {
    const newFilter = (event.target as HTMLSelectElement).value;
    if (newFilter == '') {
      this.changeFilter();
    }
    else{ 
      this.changeFilter(newFilter)
      console.log(typeof newFilter);
    }
  } 

    //Filter by Price

  handleChangePrice(event: Event): void {
    const newFilter = (event.target as HTMLSelectElement).value;
    if (newFilter == '') {
      this.changeFilter();
    }
    else{ 
      this.changeFilter(Number(newFilter))
      console.log(typeof newFilter);
    }
  } 

  // get moviesByYear():Movie[]
  // {
  //   const pageIndex = (this.selectedPage -1) * this.moviesPerPage;
  //   return this.repository.GetMoviesByYear(this.selectedYear).slice(pageIndex, pageIndex + this.moviesPerPage)!;    
  // }

  // changeYear(newFilter?: number):void{
  //   this.selectedYear = newFilter!;
  //   console.log(this.selectedYear);
  //   console.log(typeof newFilter);
  // }

  // handleChangeYear(event: Event): void {
  //   const newFilter = (event.target as HTMLSelectElement).value;
  //   if (newFilter == '') {
  //     this.changeYear();
  //   }
  //   else{ 
  //     this.changeYear(Number(newFilter));      
  //   }
  // } 


  changePage(newPage: number): void{
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number): void{    
    this.moviesPerPage = Number(newSize);
    this.changePage(1);
  } 



  get pageCount(): number{
    return Math.ceil(this.repository.getMovies(this.selectedFilter).length / this.moviesPerPage)
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
