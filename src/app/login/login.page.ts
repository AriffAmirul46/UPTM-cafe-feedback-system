import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Adjust the import path as needed
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  async loginUser() {
    if (this.loginData.email && this.loginData.password) {
      try {
        await this.authService.login(this.loginData.email, this.loginData.password);
        
        // Check if the email belongs to an admin
        if (this.loginData.email.includes('@admin')) {
          alert('Admin login successful');
          this.router.navigate(['/admin']); // Redirect to the admin page
        } else {
          alert('Login successful');
          this.router.navigate(['/home']); // Redirect to the regular home page
        }
      } catch (error: any) {
        const errorMessage = error.message ? error.message : 'Unknown error occurred';
        alert('Error: ' + errorMessage);
      }
    } else {
      alert('Please fill in both fields');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']); // Navigate to the register page
  }
}
