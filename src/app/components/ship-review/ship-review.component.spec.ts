import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipReviewComponent } from './ship-review.component';

describe('ShipReviewComponent', () => {
  let component: ShipReviewComponent;
  let fixture: ComponentFixture<ShipReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
