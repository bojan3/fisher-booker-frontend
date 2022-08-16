import { TestBed } from '@angular/core/testing';

import { ReservationReviewService } from './reservation-review.service';

describe('ReservationReviewService', () => {
  let service: ReservationReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
