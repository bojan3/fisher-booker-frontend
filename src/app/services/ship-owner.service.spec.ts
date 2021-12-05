import { TestBed } from '@angular/core/testing';

import { ShipOwnerService } from './ship-owner.service';

describe('ShipOwnerService', () => {
  let service: ShipOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
