import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCarouselModule } from '@ngmodule/material-carousel';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import {  Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsPageComponent } from './Pages/projects-page/projects-page.component';
import { ProjectDetailsPageComponent } from './Pages/project-details-page/project-details-page.component';
import { AboutUsPageComponent } from './Pages/about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './Pages/contact-us-page/contact-us-page.component';
import { SignInPageComponent } from './Pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './Pages/sign-up-page/sign-up-page.component';

const routes : Routes = [
  {
    path: '',
    component: HomePageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProjectsPageComponent,
    ProjectDetailsPageComponent,
    AboutUsPageComponent,
    ContactUsPageComponent,
    SignInPageComponent,
    SignUpPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatCarouselModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
