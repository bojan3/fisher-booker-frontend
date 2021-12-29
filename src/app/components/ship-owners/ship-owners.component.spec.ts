import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipOwnersComponent } from './ship-owners.component';

describe('ShipOwnersComponent', () => {
  let component: ShipOwnersComponent;
  let fixture: ComponentFixture<ShipOwnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipOwnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
