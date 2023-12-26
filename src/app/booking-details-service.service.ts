import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingDetails } from './booking-details';

@Injectable({
  providedIn: 'root',
})
export class BookingDetailsServiceService {
  private apiUrl = 'http://localhost:8080/booking-details';

  constructor(private http: HttpClient) {}

  getAllBookingDetails(): Observable<BookingDetails[]> {
    return this.http.get<BookingDetails[]>(this.apiUrl);
  }

  getBookingDetailsById(id: number): Observable<BookingDetails> {
    return this.http.get<BookingDetails>(`${this.apiUrl}/${id}`);
  }

  saveBookingDetails(
    bookingDetails: BookingDetails
  ): Observable<BookingDetails> {
    return this.http.post<BookingDetails>(this.apiUrl, bookingDetails);
  }

  deleteBookingDetailsByUserId(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}`);
  }

  getBookingDetailsByUserId(userId: number): Observable<BookingDetails[]> {
    return this.http.get<BookingDetails[]>(`${this.apiUrl}/user/${userId}`);
  }
}
