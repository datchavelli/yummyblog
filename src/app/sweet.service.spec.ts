import { TestBed, inject } from '@angular/core/testing';

import { SweetService } from './sweet.service';

describe('SweetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SweetService]
    });
  });

  it('should be created', inject([SweetService], (service: SweetService) => {
    expect(service).toBeTruthy();
  }));
});
