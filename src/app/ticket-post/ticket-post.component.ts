import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ticket } from '../ticket';
import { TicketserviceService } from '../ticketservice.service';

@Component({
  selector: 'app-ticket-post',
  templateUrl: './ticket-post.component.html',
  styleUrl: './ticket-post.component.css',
})
export class TicketPostComponent {
  ticketList: Ticket[] = [];
  bookingForm: FormGroup;
  bookingSuccess: boolean = false;
  calculateCostAmount: any;
  updateCostAmount: any;
  lastBookedTicket: any;

  constructor(
    private ticketService: TicketserviceService,
    private formBuilder: FormBuilder
  ) {
    this.bookingForm = this.formBuilder.group({
      bookingDetailsId: ['', Validators.required], // Allow user to input the bookingDetailsId
      seatNumber: ['', Validators.required],
      costType: ['general', Validators.required],
    });
  }

  searchBookingDetails(): void {
    const bookingDetailsId = this.bookingForm.value.bookingDetailsId;
    this.ticketService.getTicketById(bookingDetailsId).subscribe(
      (result: any) => {
        if (result) {
          this.bookSeat();
        } else {
          console.log('BookingDetailsId not found. Please enter a valid ID.');
        }
      },
      (error: any) => {
        console.error('Error checking booking details:', error);
      }
    );
  }

  bookSeat(): void {
    if (this.bookingForm.valid) {
      const ticketData: Ticket = {
        bookingDetailsId: this.bookingForm.value.bookingDetailsId,
        seatNumber: this.bookingForm.value.seatNumber,
        cost: this.calculateCost(this.bookingForm.value.costType),
      };

      this.ticketService.saveTicket(ticketData).subscribe(
        (savedTicket) => {
          console.log('Ticket saved:', savedTicket);
          this.ticketList.push(savedTicket);
          this.bookingForm.reset();
        },
        (error) => {
          console.error('Error saving ticket:', error);
        }
      );
    }
  }

  calculateCost(costType: string): number {
    switch (costType) {
      case 'sleeper':
        return 200;
      case 'ac':
        return 1000;
      default:
        return 50;
    }
  }
}
