import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketserviceService {
  private apiUrl = 'http://localhost:8080/tickets'; 

  constructor(private httpClient: HttpClient) {}

  getAllTickets(): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(`${this.apiUrl}`);
  }

  getTicketById(id: number): Observable<Ticket> {
    return this.httpClient.get<Ticket>(`${this.apiUrl}/${id}`);
  }

  saveTicket(ticket: Ticket): Observable<Ticket> {
    return this.httpClient.post<Ticket>(`${this.apiUrl}`, ticket);
  }

  deleteTicket(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

  getTicketsByBookingDetailsId(bookingDetailsId: number): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(
      `${this.apiUrl}/booking/${bookingDetailsId}`
    );
  }

  getTicketsBySeatNumber(seatNumber: string): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(`${this.apiUrl}/seat/${seatNumber}`);
  }
}
