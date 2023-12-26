import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css',
})
export class DeleteUserComponent implements OnInit {
  id!: number;

  constructor(
    private userService: UserserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
  }

  onDelete() {
    this.userService.deleteUser(this.id).subscribe(
      () => {
        console.log('User deleted successfully.');
        this.gotoallUsers();
      },
      (error: any) => {
        if (error.status === 200) {
          console.log('User deleted successfully.');
          this.gotoallUsers();
        } else {
          console.error('Error deleting user:', error);
        }
      }
    );
  }
  gotoallUsers() {
    this.router.navigate(['/allusers']);
  }
}
