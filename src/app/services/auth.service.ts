import { Injectable } from '@angular/core';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  logout() {
    return signOut(auth);
  }

  getCurrentUser() {
    return auth.currentUser;
  }
}
