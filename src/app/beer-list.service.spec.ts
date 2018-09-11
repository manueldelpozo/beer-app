import { TestBed, inject } from '@angular/core/testing';

import { BeerListService } from './beer-list.service';

describe('BeerListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerListService]
    });
  });

  it('should be created', inject([BeerListService], (service: BeerListService) => {
    expect(service).toBeTruthy();
  }));
});
