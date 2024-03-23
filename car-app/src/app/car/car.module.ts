import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentCarComponent } from './current-car/current-car.component';
import { CarRoutingModule } from './car-routing.module';
import { CarsListComponent } from './cars-list/cars-list.component';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { AddCarComponent } from './add-car/add-car.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CurrentCarComponent,
    CarsListComponent,
    MainComponent,
    AddCarComponent,
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class CarModule { }
