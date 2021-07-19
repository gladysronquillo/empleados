import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LARGE_MODAL, SMALL_MODAL } from 'src/app/core/base-constants';
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

  displayedColumns = ['id', 'identification', 'names', 'surnames', 'department', 'actions'];
  dataSource = new MatTableDataSource<Employee>();

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private employeeService: EmployeeService,
    private modalService: NgbModal,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getEmployees();
  }

  openAddEditModal() {
    console.log(1);
    const modalRef = this.modalService.open(AddEditDepartmentComponent, SMALL_MODAL);
    modalRef.componentInstance.title = 'Agregar Departamento';
    modalRef.componentInstance.isEdit = false;
    modalRef.result.then(
      (result) => {

      },
      (reason) => { }
    );
  }

  filter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  getEmployees() {
    this.employeeService.list().subscribe((data: Employee[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, (error) => {
      alert('ocurrió un error');
    });
  }

  delete(idautor) {
    /*if (confirm('Seguro que deseas eliminar este autor?')) {
      this.autorService.delete(idautor).subscribe((data) => {
        alert('Eliminado con éxito');
        this.getAutores();
        console.log(data);
      }, (error) => {
        console.log(error);
      });
    }*/
  }
}
