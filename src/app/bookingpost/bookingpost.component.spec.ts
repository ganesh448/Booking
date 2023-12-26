import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingpostComponent } from './bookingpost.component';

describe('BookingpostComponent', () => {
  let component: BookingpostComponent;
  let fixture: ComponentFixture<BookingpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingpostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
