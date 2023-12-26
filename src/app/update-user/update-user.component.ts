import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css',
})
export class UpdateUserComponent implements OnInit {
  user: User = new User();
  id!: number;

  constructor(
    private userService: UserserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(
      (data: User) => {
        this.user = data;
      },
      (error: any) => console.log(error)
    );
  }

  onSubmit() {
    this.userService.updateUser(this.id, this.user).subscribe(
      (data: any) => {
        console.log(data);
        this.goToallusers();
      },
      (error: any) => console.log(error)
    );
  }

  goToallusers() {
    this.router.navigate(['/allusers']);
  }
}
