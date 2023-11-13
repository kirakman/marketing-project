/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { MarketingServiceService } from './marketing-service.service';

describe('Service: MarketingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarketingServiceService]
    });
  });

  it('should ...', inject([MarketingServiceService], (service: MarketingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
