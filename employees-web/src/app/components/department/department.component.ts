import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SMALL_MODAL } from 'src/app/core/base-constants';
import { SweetAlertService } from 'src/app/core/services/sweet.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { AddEditDepartmentComponent } from 'src/app/modals/add-edit-department/add-edit-department.component';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  displayedColumns = ['id', 'name', 'actions'];
  dataSource = new MatTableDataSource<Department>();

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private departmentService: DepartmentService,
    private modalService: NgbModal,
    private sweetAlertService: SweetAlertService,
    private toastService: ToastService) {
  }

  ngOnInit() {
    this.findDepartments();
  }

  openAddEditModal(department: Department) {
    const modalRef = this.modalService.open(AddEditDepartmentComponent, SMALL_MODAL);
    modalRef.componentInstance.title = department != null ? 'Editar Departamento' : 'Agregar Departamento';
    modalRef.componentInstance.isEdit = department != null ? true : false;
    modalRef.componentInstance.department = department;
    modalRef.result.then(
      (result) => {
        this.findDepartments();
      },
      (reason) => { }
    );
  }

  filter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  findDepartments() {
    this.departmentService.list().subscribe((data: Department[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, (error) => {
      alert('ocurrió un error');
    });
  }

  delete(id: number) {
    this.sweetAlertService.confirm({ message: 'Desea eliminar el departamento' },
      (scope: DepartmentComponent, resolve) => {
        this.departmentService.delete(id).subscribe((data: boolean) => {
          if (data) {
            resolve();
            scope.findDepartments();
            scope.sweetAlertService.close();
          } else {
            scope.toastService.warning('No se pudo eliminar el departamento');
            scope.sweetAlertService.close();
          }
        });
      }, this);
  }

}
