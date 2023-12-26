import { Component } from '@angular/core';
import { BookingDetails } from '../booking-details';
import { BookingDetailsServiceService } from '../booking-details-service.service';

@Component({
  selector: 'app-ticket-generator-component',
  templateUrl: './ticket-generator-component.component.html',
  styleUrl: './ticket-generator-component.component.css',
})
export class TicketGeneratorComponentComponent {
  userId: number | undefined;
  bookingDetails: BookingDetails[] = [];
  errorMessage: string | null = null;

  constructor(private bookingService: BookingDetailsServiceService) {}

  searchByUserId(): void {
    if (this.userId) {
      this.bookingService.getBookingDetailsByUserId(this.userId).subscribe(
        (data: BookingDetails[]) => {
          this.bookingDetails = data;
          this.errorMessage = null;
        },
        (error) => {
          console.error('Error retrieving booking details:', error);
          this.bookingDetails = [];
          this.errorMessage =
            'Error retrieving booking details. Please try again.';
        }
      );
    } else {
      this.errorMessage = 'Please enter a valid User ID.';
    }
  }
}
