import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private http: HttpClient) {}

  apiModels = 'http://localhost:8080/cars/';
  apiBrandsName = 'http://localhost:8080/brands/';
  apiAddCar = 'http://localhost:8080/addCar';

  getModels(brand: string): Observable<any> {
    const brands = this.http.get<any>(`${this.apiModels}${brand}`);

    return brands;
  }

  getBrandsName(): Observable<any> {
    const brands = this.http.get<any>(`${this.apiBrandsName}`);

    return brands;
  }

  addCar(data: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const addCar = this.http.post<any>(`${this.apiAddCar}`, data, {
      headers: headers,
    });
    return addCar;
  }
}
