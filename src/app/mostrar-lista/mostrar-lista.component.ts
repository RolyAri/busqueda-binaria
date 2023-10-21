import { Component } from '@angular/core';
import { ListaService } from '../services/lista.service';

@Component({
  selector: 'app-mostrar-lista',
  templateUrl: './mostrar-lista.component.html',
  styleUrls: ['./mostrar-lista.component.css']
})
export class MostrarListaComponent {
  listaNumeros: any;
  constructor(private listaService: ListaService){}
  ngOnInit(): void{
    this.listaNumeros=this.listaService.getLista();
  }
}
