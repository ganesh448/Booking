import { Component } from '@angular/core';
import { BookingDetailsServiceService } from '../booking-details-service.service';
import { BookingDetails } from '../booking-details';

@Component({
  selector: 'app-booking-detals-delete-component',
  templateUrl: './booking-detals-delete-component.component.html',
  styleUrl: './booking-detals-delete-component.component.css',
})
export class BookingDetalsDeleteComponentComponent {
  bookingDetails: BookingDetails = {
    id: 0,
    userId: 0,
    trainId: 0,
    numberOfSeats: 0,
    sourceStation: '',
    destinationStation: '',
    cost: 0,
    successMessage: '',
    errorMessage: '',
    bookingService: undefined,
    bookingDetails: function (bookingDetails: any): unknown {
      throw new Error('Function not implemented.');
    },
  };

  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private bookingService: BookingDetailsServiceService) {}

  deleteBooking(userId: number): void {
    console.log('Deleting booking with User ID:', userId);

    this.bookingService.deleteBookingDetailsByUserId(userId).subscribe(
      () => {
        console.log('Booking details deleted successfully!');
        this.successMessage = 'Booking details deleted successfully!';
      },
      (error: any) => {
        console.error('Error deleting booking details:', error);
        if (error.status === 404) {
          this.errorMessage =
            'Booking details not found. Please check the User ID.';
        } else {
          this.errorMessage =
            'Error deleting booking details. Please try again later.';
        }
      }
    );
  }
}
