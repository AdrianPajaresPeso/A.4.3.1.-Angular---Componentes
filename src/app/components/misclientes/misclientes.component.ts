import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente/cliente';

@Component({
  selector: 'app-misclientes',
  templateUrl: './misclientes.component.html',
  styleUrls: ['./misclientes.component.css']
})
export class MisclientesComponent implements OnInit {
  public clientes: Cliente[];
  public cliente: Cliente;
  constructor() { }

  ngOnInit(): void {
    this.cliente = new Cliente();
    this.cliente.nombre = 'Pepe';
    this.cliente.direccion = 'calle pirula';
    this.clientes = [];
    this.clientes.push(new Cliente('Pepe', 'calle Pirula'));
  }

  addCliente(): void{
    this.clientes.push(this.cliente);
    this.cliente = new Cliente();
  }
}
