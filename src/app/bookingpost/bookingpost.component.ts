import { Component, OnInit } from '@angular/core';
import { BookingDetailsServiceService } from '../booking-details-service.service';
import { BookingDetails } from '../booking-details';

@Component({
  selector: 'app-bookingpost',
  templateUrl: './bookingpost.component.html',
  styleUrls: ['./bookingpost.component.css'],
})
export class BookingpostComponent implements OnInit {
  bookingDetails: BookingDetails = {
    userId: 0,
    trainId: 0,
    numberOfSeats: 0,
    sourceStation: '',
    destinationStation: '',
    id: 0,
    cost: 0,
    successMessage: '',
    errorMessage: '',
    bookingService: undefined,
    bookingDetails: function (bookingDetails: any): unknown {
      throw new Error('Function not implemented.');
    },
  };

  stations: string[] = ['Chittoor', 'Trupathi', 'Hyderabad', 'Delhi'];
  stationCosts: { [key: string]: number } = {
    'Chittoor-Trupathi': 20,
    'Trupathi-Chittoor': 20,
    'Delhi-Hyderabad': 50,
    'Delhi-Chittoor': 40,
    'Chittoor-Hyderabad': 30,
  };

  successMessage: string | null = null;
  ticketDetails: any;
  isSubmitting = false;

  constructor(private bookingService: BookingDetailsServiceService) {}

  ngOnInit(): void {}

  calculateCost(): number {
    const key = `${this.bookingDetails.sourceStation}-${this.bookingDetails.destinationStation}`;
    return this.stationCosts[key] * this.bookingDetails.numberOfSeats;
  }

  updateCost(): void {
    this.bookingDetails.cost = this.calculateCost();
  }

  submitForm(): void {
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.bookingDetails.cost = this.calculateCost();

    this.bookingService.saveBookingDetails(this.bookingDetails).subscribe(
      (savedBookingDetails: any) => {
        console.log('Form submitted successfully!', savedBookingDetails);
        this.successMessage = 'Booking details saved successfully!';
        this.isSubmitting = false;
      },
      (error) => {
        console.error('Error saving booking details:', error);
        this.successMessage = 'Error saving booking details. Please try again.';
        this.isSubmitting = false;
      }
    );
  }
}
