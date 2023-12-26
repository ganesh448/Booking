import { Component } from '@angular/core';
import { BookingDetails } from '../booking-details';
import { BookingDetailsServiceService } from '../booking-details-service.service';

@Component({
  selector: 'app-booking-details-list',
  templateUrl: './booking-details-list.component.html',
  styleUrl: './booking-details-list.component.css',
})
export class BookingDetailsListComponent {
  bookingDetails: BookingDetails[] = [];

  constructor(private bookingService: BookingDetailsServiceService) {}

  ngOnInit(): void {
    this.loadBookingDetails();
  }

  loadBookingDetails(): void {
    this.bookingService.getAllBookingDetails().subscribe(
      (data: BookingDetails[]) => {
        this.bookingDetails = data;
      },
      (error: any) => {
        console.error('Error fetching booking details:', error);
      }
    );
  }
}
