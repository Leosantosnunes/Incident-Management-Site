import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PartialsModule } from "../partials/partials.module";
import { AdminComponent } from "./admin/admin.component";
import { CommonModule } from "@angular/common";
import { ModelModule } from "../model/model.module";
import { RouterModule } from "@angular/router";
import { MovieTableComponent } from "./movie-table/movie-table.component";
import { MovieEditorComponent } from './movie-editor/movie-editor.component';
import { AuthGuard } from "../guards/auth.guard";


const routing = RouterModule.forChild([    
    { path: 'main', component: AdminComponent, canActivate: [AuthGuard],
     children: [
        { path: 'movies/:mode/:id', component: MovieEditorComponent, data: {title: 'Edit Movie'}, canActivate: [AuthGuard]},
        { path: 'movies/:mode', component: MovieEditorComponent, data: {title: 'Add Movie'}, canActivate: [AuthGuard]},
        { path: 'movies', component: MovieTableComponent, data: {title: 'Book Table'}, canActivate: [AuthGuard]},        
        { path: '**', redirectTo: 'admin' }]
    },
    { path: '**', redirectTo: 'auth' },
  ]);


@NgModule({
    imports: [RouterModule, ModelModule,CommonModule, FormsModule,PartialsModule,routing],
    providers:[],
    declarations: [AdminComponent, MovieTableComponent, MovieEditorComponent,MovieEditorComponent]    
})
export class AdminModule{};