import {NgModule} from '@angular/core';
import { MovieRepository } from './movie.reposity';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { ContactRepository } from './contact.repository';
import { Contact } from './contact.model';

@NgModule({
    imports: [HttpClientModule],
    providers: [MovieRepository,StaticDataSource,Cart,Order,OrderRepository,RestDataSource,ContactRepository,Contact,{provide:StaticDataSource,useClass:RestDataSource}]
})
export class ModelModule{}