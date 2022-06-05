import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCottageOptionsComponent } from './edit-cottage-options.component';

describe('EditCottageOptionsComponent', () => {
  let component: EditCottageOptionsComponent;
  let fixture: ComponentFixture<EditCottageOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCottageOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCottageOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
