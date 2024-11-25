import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private router: Router, private authService: AuthService) {}
  
  /*goToNotifications() {
    this.router.navigate(['/notifications']); // Navigate to the notifications page
  } */

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToMenu() {
    this.router.navigate(['/menu']);
  }

  goToFeedback() {
    this.router.navigate(['/feedback']);
  }

  goToContact() {
    this.router.navigate(['/contact']); // Ensure the 'contact-us' route exists
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    }).catch((error) => {
      console.error('Logout error:', error);
    });
    console.log('HomePage Loaded');
  }
}
