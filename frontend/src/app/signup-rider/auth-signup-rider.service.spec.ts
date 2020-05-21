import { TestBed } from '@angular/core/testing';

import { AuthSignupRiderService } from './auth-signup-rider.service';

describe('AuthSignupRiderService', () => {
  let service: AuthSignupRiderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSignupRiderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
