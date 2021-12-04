import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipOwnerPageComponent } from './ship-owner-page.component';

describe('ShipOwnerPageComponent', () => {
  let component: ShipOwnerPageComponent;
  let fixture: ComponentFixture<ShipOwnerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipOwnerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipOwnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
