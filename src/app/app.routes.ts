const routes: Routes = [];
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
