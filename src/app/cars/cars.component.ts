import { Component } from '@angular/core';
import { CarsListComponent } from './cars-list/cars-list.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CarsListComponent, RouterLink, RouterOutlet],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

}
