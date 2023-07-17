import {NgModule} from '@angular/core';
import { MovieRepository } from './movie.reposity';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource';

@NgModule({
    imports: [HttpClientModule],
    providers: [MovieRepository,StaticDataSource,Cart,{provide:StaticDataSource,useClass:RestDataSource}]
})
export class ModelModule{}