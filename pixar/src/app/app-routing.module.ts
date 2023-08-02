import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
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
import { AdminComponent } from './auth/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: SigninComponent },
  {path: 'movieStore', component: MovieStoreComponent, data:{title:'Store'}, canActivate:[StoreFirstGuard,AuthGuard]},
  {path: 'cart', component: CartDetailComponent, data:{title:'Shopping-Cart'}, canActivate:[StoreFirstGuard,,AuthGuard]},
  {path: 'checkout', component: CheckOutComponent, data:{title:'CheckOut'}, canActivate:[StoreFirstGuard,,AuthGuard]},
  {path: 'library', component: LibraryComponent, data:{title:'Library'},canActivate:[StoreFirstGuard,,AuthGuard]},
  {path: 'about', component: AboutComponent, data:{title:'About'},canActivate:[StoreFirstGuard,,AuthGuard]},
  {path: 'contact', component: ContactComponent, data:{title:'Contact Page'},canActivate:[StoreFirstGuard,,AuthGuard]},
  {path: '', redirectTo: '/movieStore', pathMatch: 'full'},
  {path: '**', redirectTo: '/movieStore'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [StoreFirstGuard,AuthGuard]
})
export class AppRoutingModule { }
