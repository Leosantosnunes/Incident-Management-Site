import {NgModule} from '@angular/core';
import { MovieRepository } from './movie.reposity';
import { StaticDataSource } from './static.datasource';

@NgModule({
    providers: [MovieRepository,StaticDataSource]
})
export class ModelModule{}