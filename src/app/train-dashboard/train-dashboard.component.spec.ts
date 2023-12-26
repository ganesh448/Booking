import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainDashboardComponent } from './train-dashboard.component';

describe('TrainDashboardComponent', () => {
  let component: TrainDashboardComponent;
  let fixture: ComponentFixture<TrainDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
