import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth-service.service';
import { Userlogin } from '../userlogin';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoggedIn: boolean = false;
  errorMessage: any;
  successMessage: any;

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      (_response) => {
        console.log('Login successful');
        alert('login sucessful');
        this.router.navigate(['/all']);
        this.isLoggedIn = true;
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }
}
