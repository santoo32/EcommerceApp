import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

export class Productclass implements OnInit {

  constructor(public nombre:string, public precio: number) {}

  ngOnInit() {
  }

}
