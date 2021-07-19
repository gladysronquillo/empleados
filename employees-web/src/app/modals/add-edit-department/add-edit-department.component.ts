import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlertService } from 'src/app/core/services/sweet.service';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.scss']
})
export class AddEditDepartmentComponent implements OnInit {

  title: string;
  isEdit = false;
  department: Department;
  modalForm: FormGroup = this.initForm();

  constructor(private activeModal: NgbActiveModal,
    private sweetAlertService: SweetAlertService,
    private departmentService: DepartmentService) { }

  ngOnInit() {
    if (this.department != null) {
      this.modalForm.patchValue(this.department);
    }
  }

  cancel() {
    this.activeModal.close();
  }

  ok() {
    if (this.modalForm.valid) {
      this.sweetAlertService.confirm({
        message: 'Se guardará la información',
        title: '¿Está seguro?'
      },
        (scope: AddEditDepartmentComponent, resolve) => {
          resolve();
          scope.sweetAlertService.close();
          scope.departmentService.save(this.modalForm.value).subscribe(data => {
            if (data != null) {
              scope.cancel();
              scope.sweetAlertService.success();
            }
          });
        }, this, (scope: AddEditDepartmentComponent) => {
        });
    } else {
console.log('gladys');

    }
  }

  private initForm() {
    return new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, Validators.required)
    });
  }

}
