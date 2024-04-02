import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Car } from 'src/app/types/car';
import { UserForAuth } from 'src/app/types/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-car',
  templateUrl: './current-car.component.html',
  styleUrls: ['./current-car.component.css']
})
export class CurrentCarComponent implements OnInit {
  car = {} as Car;
  user = {} as UserForAuth;

  showEditMode: boolean = false;

  form = this.fb.group({
    imgUrl: ['', [Validators.required]],
    carName: ['', [Validators.required]],
    brand: ['', [Validators.required]],
    year: ['', [Validators.required]],
    color: ['', [Validators.required]],
    description: ['', [Validators.required]],
  })

  constructor(private api: ApiService, private activeRoute: ActivatedRoute, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe((data) => {

      const id = data['carId'];
      this.api.getCar(id).subscribe((car) => {
        this.car = car;
      });
    });
    
    this.userService.getUser().subscribe((userData) => {
      this.user = userData;
    });
  }

onToggle() {
  this.showEditMode = !this.showEditMode;
}

likeCar() {
  this.activeRoute.params.subscribe((data) => {
    const id = data['carId'];
    this.userService.getUser().subscribe((userData) => {
      const userId = userData._id;
      this.api.likeCar(id, userId);

    })
  });
}

saveCar(form: NgForm) {
  console.log(form);

  if (form.invalid) {
    console.log("error");

    return;
  }

  this.car = form.value as Car;
  const { carName, brand, year, color, imgUrl, description } = this.car;

  this.activeRoute.params.subscribe((data) => {

    const id = data['carId'];

    console.log(id, carName, brand, year, color, imgUrl, description);
    this.api.uppdateCar(carName, brand, String(year), color, imgUrl, description, id).subscribe(() => {
      this.onToggle();
    });
  });

}

delCar() {
  this.activeRoute.params.subscribe((data) => {

    const id = data['carId'];
    this.api.deleteCar(id);
  });
}

onCancel(e: Event) {
  e.preventDefault();
  this.onToggle();
}

  get isLoggedIn(): boolean {
  return this.userService.isLogged;
}

  get isOwner(): boolean {
  return !!(this.user._id == String(this.car.userId._id));
}
}
