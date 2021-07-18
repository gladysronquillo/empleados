import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Employee} from '../../models/employee';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent implements OnInit {
  employee: Employee = {
    id:null,
    salary: null,
    person: null
  };
  id: any;
  editing = false;
  autores: Employee[];

  constructor(private autorService: EmployeeService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.editing = true;
      this.autorService.list().subscribe((data: Employee[]) => {
        this.autores = data;
        this.employee = this.autores.find((m) => {
          return m.id == this.id;
        });
        console.log(this.employee);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.editing = false;
    }
    console.log(this.id);
  }

  ngOnInit() {
  }

  saveAutor() {
    if (this.editing) {
      /*this.autorService.put(this.autor).subscribe((data) => {
          alert('Autor actualizado');
          console.log(data);
        }, (error) => {
          console.log(error);
          alert('ocurrió un error');
        }
      );*/
    } else {
      this.autorService.save(this.employee).subscribe((data) => {
          alert('Empleado guardado');
          console.log(data);
        }, (error) => {
          console.log(error);
          alert('ocurrió un error');
        }
      );
    }
  }
}
