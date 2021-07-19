import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { FormEmployeeComponent } from './components/employee/form-employee/form-employee.component';
import { HomeComponent } from './components/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import {NgbActiveModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { AddEditDepartmentComponent } from './modals/add-edit-department/add-edit-department.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    FormEmployeeComponent,
    AddEditDepartmentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [NgbActiveModal,
    NgbModalConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
