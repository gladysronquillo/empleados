import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlertService } from 'src/app/core/services/sweet.service';
import { Employee } from 'src/app/models/employee';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.scss']
})
export class AddEditEmployeeComponent implements OnInit {

  title: string;
  isEdit = false;
  employee: Employee;
  modalForm: FormGroup = this.initForm();
  departments = [];
  supervisors = [];

  constructor(private activeModal: NgbActiveModal,
    private sweetAlertService: SweetAlertService,
    private departmentService: DepartmentService,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    if (this.employee != null) {
      this.modalForm.patchValue(this.employee);
    }
    this.departmentService.list().subscribe((data: []) => { this.departments = data; });
    this.employeeService.findForSelector().subscribe((data: []) => { this.supervisors = data; });
  }

  cancel() {
    this.activeModal.close();
  }

  ok() {
    this.modalForm.markAllAsTouched();
    if (this.modalForm.valid) {
      this.sweetAlertService.confirm({
        message: 'Se guardará la información',
        title: '¿Está seguro?'
      },
        (scope: AddEditEmployeeComponent, resolve) => {
          resolve();
          scope.sweetAlertService.close();
          scope.employeeService.save(this.modalForm.value).subscribe(data => {
            if (data != null) {
              scope.cancel();
              scope.sweetAlertService.success();
            }
          });
        }, this, (scope: AddEditEmployeeComponent) => {
        });
    }
  }

  private initForm() {
    return new FormGroup({
      id: new FormControl(),
      salary: new FormControl(null, [Validators.pattern("^[0-9]*$")]),
      departmentId: new FormControl(null, [Validators.required]),
      supervisorId: new FormControl(null),
      person: new FormGroup({
        id: new FormControl(null),
        identification: new FormControl(null, [Validators.required]),
        names: new FormControl(null, [Validators.required]),
        surnames: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email])
      })
    });
  }

}
