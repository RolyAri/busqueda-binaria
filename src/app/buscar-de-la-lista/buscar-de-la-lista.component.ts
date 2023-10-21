import { Component } from '@angular/core';
import { ListaService } from '../services/lista.service';

@Component({
  selector: 'app-buscar-de-la-lista',
  templateUrl: './buscar-de-la-lista.component.html',
  styleUrls: ['./buscar-de-la-lista.component.css']
})
export class BuscarDeLaListaComponent {
  numero!: number;
  n!: number;
  posicion!: number;
  constructor(private listaService: ListaService) {}
  obtenerPosicion() {
    this.n=this.numero;
    this.posicion = this.listaService.buscarNumeroDeLaLista(this.n);
  }
}
