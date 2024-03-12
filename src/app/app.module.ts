import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './layouts/pages/home-page/home-page.component';
import { AboutPageComponent } from './layouts/pages/about-page/about-page.component';
import { ContactPageComponent } from './layouts/pages/contact-page/contact-page.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ServicesPageComponent } from './layouts/pages/services-page/services-page.component';
import { ErrorPageComponent } from './layouts/pages/error-page/error-page.component';
import { PartnersComponent } from './layouts/components/partners/partners.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    HeaderComponent,
    FooterComponent,
    ServicesPageComponent,
    ErrorPageComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
