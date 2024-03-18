import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { HeaderComponent } from './cars/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarsComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cars-angular';
}
