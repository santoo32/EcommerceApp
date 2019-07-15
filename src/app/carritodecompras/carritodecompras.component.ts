import { Productclass } from './../products/productclass';
import { ProducproviderService } from './../producprovider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carritodecompras',
  templateUrl: './carritodecompras.component.html',
  styleUrls: ['./carritodecompras.component.css']
})
export class CarritodecomprasComponent implements OnInit {

  private _total = 0;
  public get total() {
    return this._total;
  }
  public set total(value) {
    this._total = value;
  }
  private _parentData: Productclass[];
  public get parentData(): Productclass[] {
    return this._parentData;
  }
  public set parentData(value: Productclass[]) {
    this._parentData = value;
  }


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
    //this.parelntData.push(new producto('bufanda', 100));
  }

  gettotal(): number{
      this.total = 0;
      this.parentData.map(producto => this.total += producto.precio * producto.cantidad);
      return this.total;

  }

  

}
