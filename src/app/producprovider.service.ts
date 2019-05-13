import { Router } from '@angular/router';
import { Productclass } from './products/productclass';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProducproviderService {

  public productosalcarro = [];

  productos: Productclass [] = [
    new Productclass('Coca Cola', 700, 1),
    new Productclass('Miller', 1000, 1),
    new Productclass('Lays ', 300, 1),
    new Productclass('Milanesas', 300, 1),
    new Productclass('Paty', 2, 1)];

  constructor() { }


  getproductos() {
    return this.productos;
  }


  setproducto(producto: Productclass) {
    this.productos.push(producto);
  }

  buscarProd(nombre: string){
    var filteredArray = this.productos.filter( obj => obj.nombre.includes(nombre));
    return filteredArray;
  }


  anadiralcarro(producto: Productclass) {
    if (this.productosalcarro.includes(producto)){
      alert('El producto ' + producto.nombre + ' ya esta en el carrito');
    } else {
      this.productosalcarro.push(producto);
    }
  }

  retirardelcarro(producto) {
    this.productosalcarro.splice(this.productosalcarro.indexOf(producto), 1);
  }

  getProductosCarro(){
    return this.productosalcarro;
  }

}
