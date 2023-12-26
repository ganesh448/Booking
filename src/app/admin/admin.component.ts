import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  isLoggedIn: boolean = false;
  loginId: any;
  password: any;

  constructor(private router: Router) {}

  login(loginId: string, password: string): void {
    if (loginId === 'Mouni' && password === 'Mouni@123') {
      this.isLoggedIn = true;
      alert('Login successful. Welcome, Admin!');

      this.router.navigate(['/Home']);
    } else {
      this.isLoggedIn = false;
      alert('Invalid login credentials. Please try again.');
    }
  }
}
