import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { MovieStoreComponent } from './movie-store.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CounterDirective } from './counter.directive';

@NgModule({
    imports: [ ModelModule,BrowserModule,FormsModule],
    declarations: [MovieStoreComponent, CounterDirective, CartSummaryComponent],
    exports:[MovieStoreComponent,CounterDirective, CartSummaryComponent]
})
export class MovieStoreModule{

}