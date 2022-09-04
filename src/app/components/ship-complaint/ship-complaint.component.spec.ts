import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipComplaintComponent } from './ship-complaint.component';

describe('ShipComplaintComponent', () => {
  let component: ShipComplaintComponent;
  let fixture: ComponentFixture<ShipComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
