import { Component } from '@angular/core';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css',
})
export class UserdashboardComponent {
  email: any | string;
  userEmail: any | string;
  user: any;
  encodeURIComponent: any;
}
