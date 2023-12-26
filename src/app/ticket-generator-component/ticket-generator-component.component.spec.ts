import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketGeneratorComponentComponent } from './ticket-generator-component.component';

describe('TicketGeneratorComponentComponent', () => {
  let component: TicketGeneratorComponentComponent;
  let fixture: ComponentFixture<TicketGeneratorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketGeneratorComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketGeneratorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
