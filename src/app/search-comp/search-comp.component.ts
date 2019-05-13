import { Component, OnInit } from '@angular/core';
import { ProducproviderService } from '../producprovider.service';
import { ActivatedRoute } from '@angular/router';
import { Productclass } from '../products/productclass';

@Component({
  selector: 'app-search-comp',
  templateUrl: './search-comp.component.html',
  styleUrls: ['./search-comp.component.css']
})
export class SearchCompComponent implements OnInit {
  
  productosBusc: Productclass [];
  constructor(public service: ProducproviderService, private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        this.productosBusc = this.service.buscarProd(params.get('nombre'));
    });
    }

    editar(producto: Productclass){
      alert('Proximamente');
    }
  
}
