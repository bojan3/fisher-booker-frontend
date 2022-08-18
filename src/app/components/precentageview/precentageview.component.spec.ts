import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecentageviewComponent } from './precentageview.component';

describe('PrecentageviewComponent', () => {
  let component: PrecentageviewComponent;
  let fixture: ComponentFixture<PrecentageviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecentageviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecentageviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
