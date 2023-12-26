import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-user-login',
  templateUrl: './delete-user-login.component.html',
  styleUrl: './delete-user-login.component.css',
})
export class DeleteUserLoginComponent {
  email: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  deleteUser() {
    if (confirm('Are you sure you want to delete this user?')) {
      this.authService.deleteUserLogin(this.email).subscribe(
        (response) => {
          console.log('User deleted successfully:', response);
          this.router.navigate(['/all']);
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
    }
  }
}
