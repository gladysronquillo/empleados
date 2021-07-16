import {Component, OnInit} from '@angular/core';
import {AutorService} from "../../services/autor.service";
import {Autor} from "../../interfaces/autor";

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  autores: Autor[];

  constructor(private autorService: AutorService) {
    this.getAutores();
  }

  getAutores() {
    this.autorService.get().subscribe((data: Autor[]) => {
      this.autores = data;
    }, (error) => {
      console.log(error);
      alert('ocurrió un error');
    });
  }

  ngOnInit() {
  }

  delete(idautor) {
    if (confirm('Seguro que deseas eliminar este autor?')) {
      this.autorService.delete(idautor).subscribe((data) => {
        alert('Eliminado con éxito');
        this.getAutores();
        console.log(data);
      }, (error) => {
        console.log(error);
      });
    }
  }
}
