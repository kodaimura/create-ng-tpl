import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { NotFoundPageComponent } from './pages/errors/not-found-page/not-found-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { SignupPageModule } from './pages/signup-page/signup-page.module';
import { HomePageModule } from './pages/home-page/home-page.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    LoginPageModule,
    SignupPageModule,
    HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
