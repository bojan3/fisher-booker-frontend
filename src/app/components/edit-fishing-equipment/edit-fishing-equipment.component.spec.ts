import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFishingEquipmentComponent } from './edit-fishing-equipment.component';

describe('EditFishingEquipmentComponent', () => {
  let component: EditFishingEquipmentComponent;
  let fixture: ComponentFixture<EditFishingEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFishingEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFishingEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
