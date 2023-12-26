import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingdashboardComponent } from './bookingdashboard.component';

describe('BookingdashboardComponent', () => {
  let component: BookingdashboardComponent;
  let fixture: ComponentFixture<BookingdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingdashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
