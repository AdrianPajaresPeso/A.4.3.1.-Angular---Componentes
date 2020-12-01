import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicionales',
  templateUrl: './condicionales.component.html',
  styleUrls: ['./condicionales.component.css']
})
export class CondicionalesComponent implements OnInit {
  public mostrar: boolean;
  constructor() { }

  ngOnInit(): void {
    this.mostrar = true;
  }

}
