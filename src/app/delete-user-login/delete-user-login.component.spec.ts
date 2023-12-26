import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserLoginComponent } from './delete-user-login.component';

describe('DeleteUserLoginComponent', () => {
  let component: DeleteUserLoginComponent;
  let fixture: ComponentFixture<DeleteUserLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteUserLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
