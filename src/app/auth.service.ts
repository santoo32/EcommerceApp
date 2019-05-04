import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable <firebase.User>;

  constructor(private afAuth: AngularFireAuth, private router: Router) { 
    this.user$ = afAuth.authState;
  }

  logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(['']);
  }

  login(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    this.router.navigate(['']);
  }
}
