import { Productclass } from './productclass';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ProducproviderService } from '../producprovider.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  listaproductos: Productclass [];

  constructor(db: AngularFireDatabase, private service: ProducproviderService) {
    /*db.list('/productos').subscribe(productos => {
      this.productos = productos;
      console.log(productos);
    });*/
    this.listaproductos = service.getproductos();
  }

  anadiralcarro(producto) {
    this.service.anadiralcarro(producto);
  }

}
