import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  id!: number;
  email: string = '';
  user: User = new User();

  constructor(
    private userService: UserserviceService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      const emailParam = params.get('email');

      if (idParam) {
        this.id = +idParam;
        this.getUserById();
      }

      if (emailParam) {
        this.email = emailParam;
        this.getUserByEmail();
      }
    });
  }

  getUserById(): void {
    if (this.id !== undefined) {
      this.userService.getUserById(this.id).subscribe(
        (user: User) => {
          this.user = user;
        },
        (error: any) => {
          console.error('Error fetching user by ID:', error);
        }
      );
    }
  }

  getUserByEmail(): void {
    console.log('Getting user by email:', this.email);
    this.userService.getUserByEmail(this.email).subscribe(
      (user: User) => {
        this.user = user;
      },
      (error: any) => {
        console.error('Error fetching user by email:', error);
      }
    );
  }
}
