import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { Userlogin } from '../userlogin';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logindetails',
  templateUrl: './logindetails.component.html',
  styleUrls: ['./logindetails.component.css'],
})
export class LogindetailsComponent implements OnInit {
  email: string = '';
  userLogin: Userlogin | undefined;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const email = params.get('email');
      if (email !== null) {
        this.fetchUserLoginDetails(email);
      }
    });
  }

  fetchUserLoginDetails(email: string): void {
    this.authService.getUserLogin(email).subscribe(
      (userLogin: Userlogin | undefined) => {
        this.userLogin = userLogin;
      },
      (error: any) => {
        console.error('Error fetching user login details:', error);
      }
    );
  }
}
