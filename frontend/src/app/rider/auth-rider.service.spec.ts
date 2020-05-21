import { TestBed } from '@angular/core/testing';

import { AuthRiderService } from './auth-rider.service';

describe('AuthRiderService', () => {
  let service: AuthRiderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthRiderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
