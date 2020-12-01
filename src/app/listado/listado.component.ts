import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  public cadena: string[];
  public nuevaCadena = '';
  constructor() {
    this.cadena = ['prueba1', 'prueba2'];
  }

  ngOnInit(): void {}
  addItem(): void {
    let mitodo;
    mitodo = this.nuevaCadena;
    this.cadena.push(mitodo);
    this.nuevaCadena = '';
  }
}
