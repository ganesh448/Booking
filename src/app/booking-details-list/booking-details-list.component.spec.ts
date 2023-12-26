import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDetailsListComponent } from './booking-details-list.component';

describe('BookingDetailsListComponent', () => {
  let component: BookingDetailsListComponent;
  let fixture: ComponentFixture<BookingDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingDetailsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
