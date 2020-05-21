import { TestBed } from '@angular/core/testing';

import { AuthRiderRegisterService } from './auth-rider-register.service';

describe('AuthRiderRegisterService', () => {
  let service: AuthRiderRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthRiderRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
