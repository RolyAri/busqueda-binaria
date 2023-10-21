import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private lista : number[]=[];

  constructor() { }

  getLista(): number[] {
    return this.lista
  }
  addLista(num: number){
    this.lista.push(num);
  }
  mostrarLista(){
    return this.lista;
  }
  buscarNumeroDeLaLista(num:number){
    return this.busquedaBinaria(this.lista,num);
  }
  busquedaBinaria(lista: number[], elemento: number) {
    let izquierda: number = 0;
    let derecha: number = lista.length - 1;

    while (izquierda <= derecha) {
        const medio: number = Math.floor((izquierda + derecha) / 2);
        if (lista[medio] === elemento) {
            return medio;
        } else if (lista[medio] < elemento) {
            izquierda = medio + 1;
        } else {
            derecha = medio - 1;
        }
    }

    return -1;
}
}
