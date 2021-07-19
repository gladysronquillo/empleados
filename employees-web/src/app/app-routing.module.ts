import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './components/employee/employee.component';
import {FormEmployeeComponent} from './components/employee/form-employee/form-employee.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'employee', component: EmployeeComponent, children: [
      { path: 'new', component: FormEmployeeComponent },
      { path: 'edit/:id', component: FormEmployeeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
