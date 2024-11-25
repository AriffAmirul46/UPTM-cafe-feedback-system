import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Make sure this is the correct path
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerData = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  async registerUser() {
    if (this.registerData.email && this.registerData.password && this.registerData.name) {
      try {
        await this.authService.register(this.registerData.email, this.registerData.password);
        alert('Registration successful, please login');
        this.router.navigate(['/login']);  // Redirect to login page
      } catch (error: any) {
        const errorMessage = error.message ? error.message : 'Unknown error occurred';
        alert('Error: ' + errorMessage);
      }
    } else {
      alert('Please fill in all fields');
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);  // Method for login link
  }
}
