import { Productclass } from './../../products/productclass';
import { ProducproviderService } from './../../producprovider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {


  constructor(private servicio: ProducproviderService) { }

  ngOnInit() {
  }


  agregarProducto(nombre: string, precio: number){
      this.servicio.setproducto(new Productclass(nombre, precio));
  }
}
