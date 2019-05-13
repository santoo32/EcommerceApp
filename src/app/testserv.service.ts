import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestservService {

  texto: string;


  constructor() { }

  setTexto(texto: string){
    this.texto = texto;
  }

  getTexto(){
    return this.texto;
  }
}
