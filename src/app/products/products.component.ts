import { Productclass } from './productclass';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productos: Observable <any[]>;

  constructor(db: AngularFireDatabase) {
    /*db.list('/productos').subscribe(productos => {
      this.productos = productos;
      console.log(productos);
    });*/

  }

}
