import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLoginComponent } from './update-login.component';

describe('UpdateLoginComponent', () => {
  let component: UpdateLoginComponent;
  let fixture: ComponentFixture<UpdateLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
