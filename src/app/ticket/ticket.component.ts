import { Component, OnInit } from '@angular/core';
import { TicketserviceService } from '../ticketservice.service';
import { Observable } from 'rxjs';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent implements OnInit {
  tickets$: Observable<Ticket[]> | undefined; 

  constructor(private ticketService: TicketserviceService) {}

  ngOnInit(): void {
    this.tickets$ = this.ticketService.getAllTickets();
  }
}
