import { Component, OnInit } from '@angular/core';
import { Userlogin } from '../userlogin';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-all-login-users',
  templateUrl: './all-login-users.component.html',
  styleUrl: './all-login-users.component.css',
})
export class AllLoginUsersComponent implements OnInit {
  loginUsers: Userlogin[] = [];
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.fetchAllLoginUsers();
  }
  fetchAllLoginUsers() {
    this.authService.getAllUserLogins().subscribe(
      (users) => {
        this.loginUsers = users;
      },
      (error) => {
        console.error('Error fetching login users', error);
      }
    );
  }
}
