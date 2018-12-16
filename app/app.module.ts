import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import{Routes ,RouterModule} from'@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { userslistComponent } from './userslist/userslist.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './userslist/nav-bar/nav-bar.component';
import { Route} from '@angular/router/src/config';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ActionmodalComponent } from './userslist/actionmodal/actionmodal.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from 'src/app/alert/alert.service';
import { NotifierModule } from 'angular-notifier';




const appRoutes:Routes =[
  {path:'' , component:LoginComponent},
  {path:'users' , component:userslistComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    userslistComponent,
    LoginComponent, NavBarComponent, ActionmodalComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( appRoutes),
    NgbModalModule,
    HttpClientModule,
    ReactiveFormsModule,
    NotifierModule

  ],
  entryComponents: [
   
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
