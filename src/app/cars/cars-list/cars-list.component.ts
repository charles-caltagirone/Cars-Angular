import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css',
})

export class CarsListComponent implements OnInit {

  modelsBybrand: any[] = [];
  brandsName: any[] = [];
  brandSelect: any;
  isSubmit: boolean = false;

  constructor(private apiCars: CarsService) {}

  ngOnInit() {
    this.apiCars
      .getBrandsName()
      .subscribe((data) => (this.brandsName = data));
  }

  selectBrand(event: any) {
    this.brandSelect = event.target.value;
  }
  
  getCarsByBrand() {
    this.modelsBybrand = [];
    this.isSubmit = true;
    this.apiCars
      .getModels(this.brandSelect)
      .subscribe((data) => (this.modelsBybrand = data));
  }
}
