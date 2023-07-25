import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { PartialsModule } from '../partials/partials.module';
import { ModelModule } from '../model/model.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [ BrowserModule,FormsModule,PartialsModule,ModelModule, RouterModule],
    declarations: [AboutComponent,ContactComponent,HomeComponent,LibraryComponent],
    exports:[AboutComponent,ContactComponent,HomeComponent,LibraryComponent,PartialsModule]
})
export class PagesModule{

}