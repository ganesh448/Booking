import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserserviceService } from './userservice.service';

describe('UserServiceService', () => {
  let service: UserserviceService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserserviceService],
    });
    service = TestBed.inject(UserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
