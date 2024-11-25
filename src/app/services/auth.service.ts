import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  // Register user
  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Login user
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Logout user
  logout() {
    return this.afAuth.signOut();
  }

  // Get the currently logged-in user
  async getCurrentUser() {
    return this.afAuth.currentUser;
  }

  async updateUserProfile(displayName: string) {
    const user = await this.afAuth.currentUser;
    if (user) {
      await user.updateProfile({ displayName });
    }
}
}