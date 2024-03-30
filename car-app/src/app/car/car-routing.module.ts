import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CurrentCarComponent } from './current-car/current-car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { AuthActivate } from '../guards/auth.activate';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: MainComponent },
    { path: 'create', component: AddCarComponent, canActivate: [AuthActivate] },
    { path: ':carId', component: CurrentCarComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarRoutingModule { }
