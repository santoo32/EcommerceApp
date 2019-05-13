import { Productclass } from './../products/productclass';
import { TestservService } from './../testserv.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos$;


  constructor(db: AngularFireDatabase) {
    this.productos$ = db.list('/productos');
  }

  ngOnInit() {
  }

}
