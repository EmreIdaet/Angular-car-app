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

  createCar(carName: string, brand: string, year: string, color: string, imgUrl: string, description: string, userId: string) {
    const payload = { carName, brand, year, color, imgUrl, description, userId }

    return this.http.post<Car>(`/api/cars`, payload);
  }

  uppdateCar(carName: string, brand: string, year: string, color: string, imgUrl: string, description: string, id: string) {
    const payload = { carName, brand, year, color, imgUrl, description }

    const { apiUrl } = environment;
    console.log((`${apiUrl}/cars/${id}/edit`));

    return this.http.put(`${apiUrl}/cars/${id}/edit`, payload);
  }

  deleteCar(id: string) {
    return this.http.delete(`/api/cars/${id}/delete`, {});
  }

  likeCar(id: string, userId: string) {
    return this.http.put(`/api/likes/${id}`, { like: { userId } })
  }
}
