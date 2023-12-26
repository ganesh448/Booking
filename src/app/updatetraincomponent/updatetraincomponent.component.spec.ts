import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetraincomponentComponent } from './updatetraincomponent.component';

describe('UpdatetraincomponentComponent', () => {
  let component: UpdatetraincomponentComponent;
  let fixture: ComponentFixture<UpdatetraincomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatetraincomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatetraincomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
