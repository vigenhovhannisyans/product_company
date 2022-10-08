import { TestBed } from '@angular/core/testing';

import { CheckIsMobileService } from './check-is-mobile.service';

describe('CheckIsMobileService', () => {
  let service: CheckIsMobileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckIsMobileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
