import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Car } from 'src/app/types/car';

@Component({
  selector: 'app-current-car',
  templateUrl: './current-car.component.html',
  styleUrls: ['./current-car.component.css']
})
export class CurrentCarComponent implements OnInit {
  car = {} as Car

  showEditMode: boolean = false;

  form = this.fb.group({
    imgUrl: ['', [Validators.required]],
    carName: ['', [Validators.required]],
    brand: ['', [Validators.required]],
    year: ['', [Validators.required]],
    color: ['', [Validators.required]],
    description: ['', [Validators.required]],
  })

  constructor(private api: ApiService, private activeRoute: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.activeRoute.params.subscribe((data) => {
      
      const id = data['carId'];
      this.api.getCar(id).subscribe((car) => {
        this.car = car;
      });
    });
  }

  onToggle() {
    this.ngOnInit()
    
    this.showEditMode = !this.showEditMode;
  }

  saveCar(form:NgForm) {
    console.log(form);
    
    if (form.invalid) {
      console.log("erer");
      
      return;
    }
    
    this.car = form.value as Car;
    console.log(this.car);
    this.onToggle();
  }

  onCancel(e: Event) {
    e.preventDefault();
    this.onToggle();
  }
}
