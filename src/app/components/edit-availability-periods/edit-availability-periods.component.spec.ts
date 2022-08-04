import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAvailabilityPeriodsComponent } from './edit-availability-periods.component';

describe('EditAvailabilityPeriodsComponent', () => {
  let component: EditAvailabilityPeriodsComponent;
  let fixture: ComponentFixture<EditAvailabilityPeriodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAvailabilityPeriodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAvailabilityPeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
