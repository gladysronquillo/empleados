import {Component, OnInit} from '@angular/core';
import {Employee} from '../../models/employee';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService) {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.list().subscribe((data: Employee[]) => {
      this.employees = data;
    }, (error) => {
      console.log(error);
      alert('ocurrió un error');
    });
  }

  ngOnInit() {
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
