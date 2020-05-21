import { TestBed } from '@angular/core/testing';

import { RideRegistrationService } from './ride-registration.service';

describe('RideRegistrationService', () => {
  let service: RideRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RideRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
