import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureReviewComponent } from './adventure-review.component';

describe('AdventureReviewComponent', () => {
  let component: AdventureReviewComponent;
  let fixture: ComponentFixture<AdventureReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventureReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
