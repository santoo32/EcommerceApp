import { ProducproviderService } from './../producprovider.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbarcomp',
  templateUrl: './navbarcomp.component.html',
  styleUrls: ['./navbarcomp.component.css']
})
export class NavbarcompComponent {

  constructor(public service: AuthService, private prodservi: ProducproviderService, private router: Router) { 
  }

  logout(){
    this.service.logout();
  }

  buscar(nombre: string){
    this.router.navigateByUrl('/search/' + nombre);
  }
}
