import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
import { Userlogin } from '../userlogin';

@Component({
  selector: 'app-update-login',
  templateUrl: './update-login.component.html',
  styleUrls: ['./update-login.component.css'],
})
export class UpdateLoginComponent implements OnInit {
  email: string = '';
  updatedUser: Userlogin = new Userlogin();

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.email = this.route.snapshot.params['email'];
    this.authService.getUserLogin(this.email).subscribe(
      (data: Userlogin) => {
        this.updatedUser = { ...data };
      },
      (error: any) => {
        console.error('Error fetching user login:', error);
      }
    );
  }

  updateLogin(): void {
    this.authService.updateByEmail(this.email, this.updatedUser).subscribe(
      (response: any) => {
        console.log('User login updated successfully:', response);
        this.router.navigate(['/all']);
      },
      (error: any) => {
        console.error('Error updating user login:', error);
      }
    );
  }
}
