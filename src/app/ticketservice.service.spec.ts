import { TestBed } from '@angular/core/testing';

import { TicketserviceService } from './ticketservice.service';

describe('TicketserviceService', () => {
  let service: TicketserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
