
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { SidebarComponent } from './comps/sidebar/sidebar.component';
import { SubSidebarComponent } from './comps/sub-sidebar/sub-sidebar.component';
import { LoginComponent } from './authorisation/login/login.component';
import { RegistrationComponent } from './authorisation/registration/registration.component';
import { ForgetpasswordComponent } from './authorisation/forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
import { DataPullComponent } from './data-pull/data-pull.component';
import { AppRoutingModule } from './app-routing.module';
import { DatavalidateComponent } from './datavalidate/datavalidate.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SubSidebarComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetpasswordComponent,
    HomeComponent,
    DataPullComponent,
    DatavalidateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
