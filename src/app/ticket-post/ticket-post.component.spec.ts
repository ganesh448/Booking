import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPostComponent } from './ticket-post.component';

describe('TicketPostComponent', () => {
  let component: TicketPostComponent;
  let fixture: ComponentFixture<TicketPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
