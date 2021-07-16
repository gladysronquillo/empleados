import {Component, OnInit} from '@angular/core';
import {Autor} from "../../../interfaces/autor";
import {AutorService} from "../../../services/autor.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-form-autor',
  templateUrl: './form-autor.component.html',
  styleUrls: ['./form-autor.component.css']
})
export class FormAutorComponent implements OnInit {
  autor: Autor = {
    identificacion: null,
    nombres: null,
    email: null,
    celular: null,
    estado: null
  };
  id: any;
  editing = false;
  autores: Autor[];

  constructor(private autorService: AutorService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.editing = true;
      this.autorService.get().subscribe((data: Autor[]) => {
        this.autores = data;
        this.autor = this.autores.find((m) => {
          return m.idautor == this.id;
        });
        console.log(this.autor);
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
      this.autorService.put(this.autor).subscribe((data) => {
          alert('Autor actualizado');
          console.log(data);
        }, (error) => {
          console.log(error);
          alert('ocurrió un error');
        }
      );
    } else {
      this.autorService.save(this.autor).subscribe((data) => {
          alert('Autor guardado');
          console.log(data);
        }, (error) => {
          console.log(error);
          alert('ocurrió un error');
        }
      );
    }
  }
}
