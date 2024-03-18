import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CarsService } from '../services/cars.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cars-form',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './cars-add.component.html',
  styleUrl: './cars-add.component.css',
})
export class CarsAddComponent implements OnInit {
  name: string | undefined;
  price: string | undefined;
  color: string | undefined;
  brand: string | undefined;
  brandsName: any[] = [];
  response: string | undefined;

  constructor(private apiCars: CarsService) {}

  ngOnInit() {
    this.apiCars.getBrandsName().subscribe((data) => (this.brandsName = data));
  }

  onSubmitForm(form: NgForm) {
    console.log(form.value);
    this.apiCars.addCar(form.value).subscribe((data) => {
      if (data.success) {
        this.response = data.success;
      } else {
        this.response = data.error;
      }
    });
  }
}
