import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAvailabilityPeriodComponent } from './edit-availability-period.component';

describe('EditAvailabilityPeriodComponent', () => {
  let component: EditAvailabilityPeriodComponent;
  let fixture: ComponentFixture<EditAvailabilityPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAvailabilityPeriodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAvailabilityPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
