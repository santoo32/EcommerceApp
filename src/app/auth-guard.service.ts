
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  path: import ('@angular/router').ActivatedRouteSnapshot[];
  route: import ('@angular/router').ActivatedRouteSnapshot;

  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate() {
    return this.auth.user$.map(user => {
      if (user) { return true; }

      this.router.navigate(['/login']);
      return false;
    });
   }
}
