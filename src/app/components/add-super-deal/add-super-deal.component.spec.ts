import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuperDealComponent } from './add-super-deal.component';

describe('AddSuperDealComponent', () => {
  let component: AddSuperDealComponent;
  let fixture: ComponentFixture<AddSuperDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSuperDealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSuperDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
