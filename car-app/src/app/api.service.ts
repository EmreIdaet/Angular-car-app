import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Car } from './types/car';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCars() {
    const { apiUrl } = environment;

    return this.http.get<Car[]>(`${apiUrl}/cars`);
  }

  getCar(id: string) {
    const { apiUrl } = environment;

    return this.http.get<Car>(`${apiUrl}/cars/${id}`);
  }

  createCar(carName: string, brand: string, year: string, color: string, imgUrl: string, description: string) {
    const { apiUrl } = environment;
    const payload = { carName, brand, year, color, imgUrl, description }

    return this.http.post<Car>(`${apiUrl}/cars`, payload);
  }
}
