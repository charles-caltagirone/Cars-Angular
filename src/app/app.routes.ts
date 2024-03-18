import { Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarsAddComponent } from './cars/cars-add/cars-add.component';

export const routes: Routes = [
  // { path: '', component: AppComponent},
  { path: '', component: CarsComponent },
  { path: 'cars-list', component: CarsListComponent },
  { path: 'cars-add', component: CarsAddComponent },
];
