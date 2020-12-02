import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.css']
})
export class CorreoComponent implements OnInit {

  correo: any;
  constructor() {
    this.correo = {
      titulo: 'Titulo del email',
      cuerpo: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum cumque qui tempore eligendi error doloribus ipsum harum a, modi alias, labore quis eveniet et voluptates quidem perspiciatis similique eaque totam.',
      emisor: 'correoEmisor@openWebinar.inv',
      destinatario: 'correoReceptor@openWebinar.inv'
    };
  }

  ngOnInit(): void {
  }

}
