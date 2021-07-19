import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './core/modules/material.module';
import {NgbActiveModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { AddEditDepartmentComponent } from './modals/add-edit-department/add-edit-department.component';
import { ToastrModule } from 'ngx-toastr';
import { DepartmentComponent } from './components/department/department.component';
import { AddEditEmployeeComponent } from './modals/add-edit-employee/add-edit-employee.component';
import { CoreModule } from './core/modules/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    DepartmentComponent,
    AddEditEmployeeComponent,
    AddEditDepartmentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    FlexLayoutModule,
    ToastrModule.forRoot(),
  ],
  providers: [NgbActiveModal,
    NgbModalConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
