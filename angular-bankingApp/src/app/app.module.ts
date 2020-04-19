import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import Http module  
import { HttpClientModule } from '@angular/common/http';  
  
// import ReactiveFormsModule for reactive form  
import { ReactiveFormsModule } from '@angular/forms';  
  
// import module for Routing.  
import { RouterModule } from '@angular/router';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminService } from './services/admin.service';  
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [  
    BrowserModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    RouterModule.forRoot([  
      {  
        path : '',  
        component : HomeComponent   
      },  
      {  
        path : 'login',  
        component : LoginComponent    
      },  
      {  
        path : 'signup',  
        component : SignupComponent   
      },  
      {  
        path : 'profile/:adminId',  
        component : ProfileComponent  
      }  
    ])  
  
  ],  
  providers: [  
    AdminService  
  ],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  