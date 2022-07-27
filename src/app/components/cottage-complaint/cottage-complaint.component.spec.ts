import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CottageComplaintComponent } from './cottage-complaint.component';

describe('CottageComplaintComponent', () => {
  let component: CottageComplaintComponent;
  let fixture: ComponentFixture<CottageComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CottageComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CottageComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
