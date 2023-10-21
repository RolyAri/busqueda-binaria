import { Component } from '@angular/core';
import { ListaService } from '../services/lista.service';

@Component({
  selector: 'app-agregar-lista',
  templateUrl: './agregar-lista.component.html',
  styleUrls: ['./agregar-lista.component.css']
})
export class AgregarListaComponent {
  numero!: number;
  constructor(private listaServices: ListaService){}
  aumentarLista(){
    this.listaServices.addLista(this.numero);
  }
}
