import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipOwnerComponent } from './ship-owner.component';

describe('ShipOwnerComponent', () => {
  let component: ShipOwnerComponent;
  let fixture: ComponentFixture<ShipOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
