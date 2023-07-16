import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MovieStoreComponent } from './movie-store/movie-store.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent, data:{title:'Home'}},
  {path: 'MovieStore', component: MovieStoreComponent, data:{title:'Store'}},
  {path: 'Library', component: LibraryComponent, data:{title:'Library'}},
  {path: 'About', component: AboutComponent, data:{title:'About'}},
  {path: 'Contact', component: ContactComponent, data:{title:'Contact'}}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
