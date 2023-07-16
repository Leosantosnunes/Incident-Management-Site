import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MovieStoreModule } from './movie-store/movie-store.module';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { LibraryComponent } from './pages/library/library.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BasePageComponent,        
    LibraryComponent,
    AboutComponent,
    ContactComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    MovieStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
