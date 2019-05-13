import { Productclass } from './../products/productclass';
import { ProducproviderService } from './../producprovider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carritodecompras',
  templateUrl: './carritodecompras.component.html',
  styleUrls: ['./carritodecompras.component.css']
})
export class CarritodecomprasComponent implements OnInit {

  total = 0;
  parentData: Productclass [];


  retirardelcarro(producto) {
    this.parentData.splice(this.parentData.indexOf(producto), 1);
  }

  checkout() {
    this.total = 0;
    this.parentData.map(producto => this.total += producto.cantidad);
    alert('Confirmada su compra de ' + this.total + ' elementos');
  }

  constructor(private paser: ProducproviderService) {
    this.parentData = paser.getProductosCarro();
   }

  ngOnInit(): void {
    //this.parentData.push(new producto('bufanda', 100));
  }

  gettotal(): number{
      this.total = 0;
      this.parentData.map(producto => this.total += producto.precio * producto.cantidad);
      return this.total;

  }

}
