import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDetalsDeleteComponentComponent } from './booking-detals-delete-component.component';

describe('BookingDetalsDeleteComponentComponent', () => {
  let component: BookingDetalsDeleteComponentComponent;
  let fixture: ComponentFixture<BookingDetalsDeleteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingDetalsDeleteComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingDetalsDeleteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
