import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlertService } from 'src/app/core/services/sweet.service';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.scss']
})
export class AddEditDepartmentComponent implements OnInit {

  title: string;
  isEdit = false;
  modalForm: FormGroup = this.initForm();

  constructor(private activeModal: NgbActiveModal,
    private sweetAlertService: SweetAlertService,
    private departmentService: DepartmentService) { }

  ngOnInit() {
  }

  cancel() {
    this.activeModal.close();
  }

  ok() {
    this.sweetAlertService.confirm({
      message: '¿Se guardará?.',
      title: ' '
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
  }

  private initForm() {
    return new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, Validators.required)
    });
  }

}
