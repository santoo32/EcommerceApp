import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ecommerceApp';

  constructor(private auth: AuthService, private userService: UserService, router: Router){
    auth.user$.subscribe(user =>{
      if(user){
        let returnUrl = localStorage.getItem("returnUrl");
        router.navigateByUrl(returnUrl);
        userService.save(user);
      }
    })
  }
}
