import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLoginUsersComponent } from './all-login-users.component';

describe('AllLoginUsersComponent', () => {
  let component: AllLoginUsersComponent;
  let fixture: ComponentFixture<AllLoginUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllLoginUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllLoginUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
