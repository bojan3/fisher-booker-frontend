import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CottageReviewComponent } from './cottage-review.component';

describe('CottageReviewComponent', () => {
  let component: CottageReviewComponent;
  let fixture: ComponentFixture<CottageReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CottageReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CottageReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
