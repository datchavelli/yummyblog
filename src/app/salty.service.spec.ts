import { TestBed, inject } from '@angular/core/testing';

import { SaltyService } from './salty.service';

describe('SaltyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaltyService]
    });
  });

  it('should be created', inject([SaltyService], (service: SaltyService) => {
    expect(service).toBeTruthy();
  }));
});
