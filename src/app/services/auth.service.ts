import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  login(usuario: User) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.password);
  }

  cadastro(usuario: User) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.password);
  }

  logout() {
    return this.angularFireAuth.auth.signOut();
  }

  getAuth() {
    return this.angularFireAuth.auth;
  }

}
