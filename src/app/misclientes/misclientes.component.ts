import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente/cliente';

@Component({
  selector: 'app-misclientes',
  templateUrl: './misclientes.component.html',
  styleUrls: ['./misclientes.component.css']
})
export class MisclientesComponent implements OnInit {
  public clientes: Cliente[];
  constructor() { }

  ngOnInit(): void {
    this.clientes = [];
  }

}
