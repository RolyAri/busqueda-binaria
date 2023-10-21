import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgregarListaComponent } from './agregar-lista/agregar-lista.component';
import { MostrarListaComponent } from './mostrar-lista/mostrar-lista.component'
import { FormsModule } from '@angular/forms';
import { BuscarDeLaListaComponent } from './buscar-de-la-lista/buscar-de-la-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarListaComponent,
    MostrarListaComponent,
    BuscarDeLaListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
