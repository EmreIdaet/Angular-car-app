import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  constructor(private apiService: ApiService) { }

  addCar(form:NgForm) {
    if(form.invalid){
      return;
    }

    console.log(form.value);
    
  }
}
