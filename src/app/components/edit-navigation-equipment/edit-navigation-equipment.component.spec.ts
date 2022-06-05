import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNavigationEquipmentComponent } from './edit-navigation-equipment.component';

describe('EditNavigationEquipmentComponent', () => {
  let component: EditNavigationEquipmentComponent;
  let fixture: ComponentFixture<EditNavigationEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNavigationEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNavigationEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
