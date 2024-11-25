import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage {

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // Logout the user
  async logout() {
    try {
      await this.afAuth.signOut(); // Firebase sign-out
      localStorage.clear(); // Clear local storage or any saved session data
      this.router.navigate(['/login']); // Redirect to login page
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }

  // Cancel logout and go back to home
  cancel() {
    this.router.navigate(['/home']); // Redirect to the home page
  }
  
}
