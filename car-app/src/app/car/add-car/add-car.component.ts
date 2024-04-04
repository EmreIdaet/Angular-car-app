import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserForAuth } from 'src/app/types/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  user = {} as UserForAuth;
  constructor(private apiService: ApiService, private userService: UserService, private router: Router) { }

  addCar(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { carName, brand, year, color, imgUrl, description } = form.value;
    const userId = this.user._id;
    this.apiService.createCar(carName, brand, year, color, imgUrl, description, userId).subscribe(() => {
      debugger
    });
    this.router.navigate(['/cars']);
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe((userData) => {
      this.user = userData;
    });
  }
}
