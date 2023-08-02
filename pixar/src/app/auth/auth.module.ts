import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SigninComponent } from "./signin/signin.component";
import { ModelModule } from "../model/model.module";
import { FormsModule } from "@angular/forms";
import { AuthGuard } from "./login/auth.guard";
import { AdminComponent } from "./admin.component";
import { CommonModule } from "@angular/common";
import { PartialsModule } from "../partials/partials.module";

const routing = RouterModule.forChild([
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: AdminComponent, canActivate:[AuthGuard],
    children: [{path: '**', redirectTo: 'movieStore'}  ]},
    {path: '**', redirectTo: 'movieStore'}
]);

@NgModule({
    imports: [RouterModule, ModelModule,CommonModule, FormsModule,PartialsModule, routing],
    providers:[AuthGuard],
    declarations: [HomeComponent,LoginComponent,SigninComponent, AdminComponent],
    exports:[HomeComponent, LoginComponent, SigninComponent, AdminComponent]
})
export class AuthModule{};

