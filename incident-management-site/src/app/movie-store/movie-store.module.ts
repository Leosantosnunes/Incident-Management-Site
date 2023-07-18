import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { MovieStoreComponent } from './movie-store.component';
import { CounterDirective } from './counter.directive';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckOutComponent } from './check-out/check-out.component';

@NgModule({
    imports: [ ModelModule,BrowserModule,FormsModule],
    declarations: [MovieStoreComponent, CounterDirective, CartDetailComponent, CheckOutComponent],
    exports:[MovieStoreComponent,CounterDirective,CartDetailComponent,CheckOutComponent]
})
export class MovieStoreModule{

}