import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureReservationComponent } from './adventure-reservation.component';

describe('AdventureReservationComponent', () => {
  let component: AdventureReservationComponent;
  let fixture: ComponentFixture<AdventureReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventureReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
