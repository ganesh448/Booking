import { Component } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  user: User = {
    name: '',
    email: '',
    phoneNo: '',
    address: '',
    password: '',
    id: 0,
  };

  constructor(
    private userService: UserserviceService,
    private router: Router
  ) {}

  registerUser(): void {
    this.userService.addUser(this.user).subscribe(
      (newUser: User) => {
        console.log('User registered successfully:', newUser);
        alert('Registration sucessful , Welcome user');
        this.router.navigate(['/login']);
      },
      (error: any) => {
        console.error('Error registering user:', error);
      }
    );
  }
}
