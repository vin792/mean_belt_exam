import { TestBed, inject } from '@angular/core/testing';

import { BidresultService } from './bidresult.service';

describe('BidresultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BidresultService]
    });
  });

  it('should ...', inject([BidresultService], (service: BidresultService) => {
    expect(service).toBeTruthy();
  }));
});
