import { TestBed } from '@angular/core/testing';

import { BookingDetailsServiceService } from './booking-details-service.service';

describe('BookingDetailsServiceService', () => {
  let service: BookingDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
