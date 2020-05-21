import { TestBed } from '@angular/core/testing';

import { AuthGuardRiderService } from './auth-guard-rider.service';

describe('AuthGuardRiderService', () => {
  let service: AuthGuardRiderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardRiderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
