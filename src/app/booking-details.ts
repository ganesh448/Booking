export interface BookingDetails {
  [x: string]: any;
  successMessage: string;
  errorMessage: string;
  bookingService: any;
  bookingDetails(bookingDetails: any): unknown;
  id: number; // The question mark denotes that this property is optional
  userId: number;
  trainId: number;
  numberOfSeats: number;
  sourceStation: string;
  destinationStation: string;
  cost: number;
}
