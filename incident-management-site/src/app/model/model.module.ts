import {NgModule} from '@angular/core';
import { MovieRepository } from './movie.reposity';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';

@NgModule({
    providers: [MovieRepository,StaticDataSource,Cart]
})
export class ModelModule{}