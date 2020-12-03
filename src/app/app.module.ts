import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './components/listado/listado.component';

import {FormsModule} from '@angular/forms';
import { MisclientesComponent } from './components/misclientes/misclientes.component';
import { CondicionalesComponent } from './components/condicionales/condicionales.component';
import { CorreoComponent } from './components/correo/correo.component';
import { ListacorreosComponent } from './components/listacorreos/listacorreos.component';
@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    MisclientesComponent,
    CondicionalesComponent,
    CorreoComponent,
    ListacorreosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
