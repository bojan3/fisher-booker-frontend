import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCottageSuperDealComponent } from './edit-cottage-super-deal.component';

describe('EditCottageSuperDealComponent', () => {
  let component: EditCottageSuperDealComponent;
  let fixture: ComponentFixture<EditCottageSuperDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCottageSuperDealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCottageSuperDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
