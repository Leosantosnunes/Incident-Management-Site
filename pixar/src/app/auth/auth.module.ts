import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { LoginComponent } from "./login/login.component";
import { SigninComponent } from "./signin/signin.component";
import { ModelModule } from "../model/model.module";
import { FormsModule } from "@angular/forms";


@NgModule({
    imports: [RouterModule,BrowserModule, ModelModule, FormsModule],
    declarations: [HomeComponent,LoginComponent,SigninComponent],
    exports:[HomeComponent, LoginComponent, SigninComponent]
})
export class AuthModule{

}