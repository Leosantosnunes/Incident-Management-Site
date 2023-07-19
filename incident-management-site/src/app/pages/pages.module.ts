import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { PartialsModule } from '../partials/partials.module';


@NgModule({
    imports: [ BrowserModule,FormsModule,PartialsModule],
    declarations: [AboutComponent,ContactComponent,HomeComponent,LibraryComponent],
    exports:[AboutComponent,ContactComponent,HomeComponent,LibraryComponent,PartialsModule]
})
export class PagesModule{

}