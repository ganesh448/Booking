import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css'],
})
export class AllusersComponent implements OnInit {
  errorMessage: any;
  users: User[] = [];

  constructor(private userService: UserserviceService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      
      (error: any) => {
        console.error('Error fetching users:', error);
        this.errorMessage = 'Error fetching users';
      }
    );
  }

  sortTable(column: string): void {
    this.users.sort((a, b) => {
      if (a[column] > b[column]) {
        return 1;
      } else if (a[column] < b[column]) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
