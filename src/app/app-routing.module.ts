import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ProjectsPageComponent } from './Pages/projects-page/projects-page.component';
import { ProjectDetailsPageComponent } from './Pages/project-details-page/project-details-page.component';
import { AboutUsPageComponent } from './Pages/about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './Pages/contact-us-page/contact-us-page.component';
import { SignInPageComponent } from './Pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './Pages/sign-up-page/sign-up-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'projects',
    component: ProjectsPageComponent
  },
  {
    path: 'about',
    component: AboutUsPageComponent
  },
  {
    path: 'contact',
    component: ContactUsPageComponent
  },
  {
    path: 'sign-in',
    component: SignInPageComponent
  },
  {
    path: 'sign-up',
    component: SignUpPageComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
