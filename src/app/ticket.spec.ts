import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ticket } from './ticket';
import { TicketComponent } from './ticket/ticket.component';
describe('TicketComponent', () => {
  let component: TicketComponent;
  let fixture: ComponentFixture<TicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
