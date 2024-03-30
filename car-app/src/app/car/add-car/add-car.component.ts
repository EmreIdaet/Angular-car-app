import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  constructor(private apiService: ApiService, private router: Router) { }

  addCar(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { carName, brand, year, color, imgUrl, description } = form.value;
    this.apiService.createCar(carName, brand, year, color, imgUrl, description).subscribe(() => {
      debugger
    });
    this.router.navigate(['/cars']);
  }
}
