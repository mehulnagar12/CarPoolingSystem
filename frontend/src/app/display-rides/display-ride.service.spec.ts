import { TestBed } from '@angular/core/testing';

import { DisplayRideService } from './display-ride.service';

describe('DisplayRideService', () => {
  let service: DisplayRideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayRideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
