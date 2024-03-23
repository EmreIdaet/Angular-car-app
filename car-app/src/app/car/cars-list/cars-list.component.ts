import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Car } from '../../types/car';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  cars: Car[] = [];
  isLoading: boolean = true;
  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.api.getCars().subscribe(cars => {
      this.cars = cars;
      this.isLoading = false;
    })
  }
}
