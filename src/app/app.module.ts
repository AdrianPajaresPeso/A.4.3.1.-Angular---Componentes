import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';

import {FormsModule} from '@angular/forms';
import { MisclientesComponent } from './misclientes/misclientes.component';
@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    MisclientesComponent
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
