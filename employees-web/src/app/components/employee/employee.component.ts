import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LARGE_MODAL, MEDIUM_MODAL, SMALL_MODAL } from 'src/app/core/base-constants';
import { SweetAlertService } from 'src/app/core/services/sweet.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { AddEditDepartmentComponent } from 'src/app/modals/add-edit-department/add-edit-department.component';
import { AddEditEmployeeComponent } from 'src/app/modals/add-edit-employee/add-edit-employee.component';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  displayedColumns = ['id', 'identification', 'names', 'surnames', 'email', 'department', 'supervisor', 'actions'];
  dataSource = new MatTableDataSource<Employee>();

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private employeeService: EmployeeService,
    private modalService: NgbModal,
    private sweetAlertService: SweetAlertService,
    private toastService: ToastService,) {
  }

  ngOnInit() {
    this.findEmployees();
  }

  openAddEditModal(employee: Employee) {
    const modalRef = this.modalService.open(AddEditEmployeeComponent, MEDIUM_MODAL);
    modalRef.componentInstance.title = employee != null ? 'Editar Empleado' : 'Agregar Empleado';
    modalRef.componentInstance.isEdit = employee != null ? true : false;
    modalRef.componentInstance.employee = employee;
    modalRef.result.then(
      (result) => {
        this.findEmployees();
      },
      (reason) => { }
    );
  }

  filter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  findEmployees() {
    this.employeeService.list().subscribe((data: Employee[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, (error) => {
      alert('ocurrió un error');
    });
  }

  delete(id: number) {
    this.sweetAlertService.confirm({ message: 'Desea eliminar el empleado' },
      (scope: EmployeeComponent, resolve) => {
        this.employeeService.delete(id).subscribe((data: boolean) => {
          if (data) {
            resolve();
            scope.findEmployees();
            scope.sweetAlertService.close();
          } else {
            scope.toastService.warning('No se pudo eliminar el empleado');
            scope.sweetAlertService.close();
          }
        });
      }, this);
  }
}
