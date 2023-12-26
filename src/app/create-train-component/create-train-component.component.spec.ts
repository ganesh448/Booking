import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrainComponentComponent } from './create-train-component.component';

describe('CreateTrainComponentComponent', () => {
  let component: CreateTrainComponentComponent;
  let fixture: ComponentFixture<CreateTrainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTrainComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTrainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
