import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationReviewsComponent } from './reservation-reviews.component';

describe('ReservationReviewsComponent', () => {
  let component: ReservationReviewsComponent;
  let fixture: ComponentFixture<ReservationReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
