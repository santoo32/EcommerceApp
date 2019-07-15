import { Productclass } from './../../products/productclass';
import { ProducproviderService } from './../../producprovider.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  form = new FormGroup({
    nombreproducto: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.pattern('^[a-zA-Z]*$'),
    ]),
    precioproducto: new FormControl('', Validators.required),
  });

  get nombreproducto(){
    return this.form.get('nombreproducto');
  }

  get precioproducto(){
    return this.form.get('precioproducto');
  }

  constructor(private servicio: ProducproviderService) { }

  ngOnInit() {
  }


  agregarProducto(nombre: string, precio: number){
      this.servicio.setproducto(new Productclass(nombre, precio, 1));
  }
}
