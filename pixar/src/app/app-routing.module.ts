import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './auth/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MovieStoreComponent } from './movie-store/movie-store.component';
import { CheckOutComponent } from './movie-store/check-out/check-out.component';
import { CartDetailComponent } from './movie-store/cart-detail/cart-detail.component';
import { StoreFirstGuard } from './guards/storeFirst.guard';
import { SigninComponent } from './auth/signin/signin.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SigninComponent },
  {path: 'movieStore', component: MovieStoreComponent, data:{title:'Store'}, canActivate:[StoreFirstGuard]},
  {path: 'cart', component: CartDetailComponent, data:{title:'Shopping-Cart'}, canActivate:[StoreFirstGuard]},
  {path: 'checkout', component: CheckOutComponent, data:{title:'CheckOut'}, canActivate:[StoreFirstGuard]},
  {path: 'library', component: LibraryComponent, data:{title:'Library'}},
  {path: 'about', component: AboutComponent, data:{title:'About'}},
  {path: 'contact', component: ContactComponent, data:{title:'Contact Page'}},
  {path: '', redirectTo: '/movieStore', pathMatch: 'full'},
  {path: '**', redirectTo: '/movieStore'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [StoreFirstGuard]
})
export class AppRoutingModule { }
