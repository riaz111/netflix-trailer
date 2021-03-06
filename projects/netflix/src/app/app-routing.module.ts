
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageMainGridComponent } from './landing-page/landing-page-components/landing-page-main-grid/landing-page-main-grid.component';
import { HomepageGuard } from './services/homepage.guard';
import {LoginAuthenticateGuard } from './services/LoginAuthenticate.guard';




const routes: Routes = [
  {
    path: '',
    component: LandingPageMainGridComponent,
    data: { animation: 'landingPage' },
  },

  {
    path: 'login',
    canActivate: [LoginAuthenticateGuard],
    loadChildren: () =>
      import('./landing-page-login/landing-page-login.module').then(
        (m) => m.LandingPageLoginModule
      ),
    data: { animation: 'loginPage' },
  },
  {
    path: 'home',
    canActivate: [HomepageGuard],
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    data: { animation: 'homePage' },
  },

  {
    path: 'movies',
    canActivate: [HomepageGuard],
    loadChildren: () =>
      import('./movies/movies.module').then((m) => m.MoviesModule),
    data: { animation: 'moviesPage' },
  },
  {
    path: 'shows',
    canActivate: [HomepageGuard],
    loadChildren: () =>
      import('./shows/shows.module').then((m) => m.ShowsModule),
    data: { animation: 'showsPage' },
  },
  {
    path: 'search',
    canActivate: [HomepageGuard],
    loadChildren: () =>
      import('./search/search.module').then((m) => m.SearchModule),
    data: { animation: 'searchPage' },
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
