import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSuperDealComponent } from './edit-super-deal.component';

describe('EditSuperDealComponent', () => {
  let component: EditSuperDealComponent;
  let fixture: ComponentFixture<EditSuperDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSuperDealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSuperDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
