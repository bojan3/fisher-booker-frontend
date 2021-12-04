import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CottageOwnerPageComponent } from './cottage-owner-page.component';

describe('CottageOwnerPageComponent', () => {
  let component: CottageOwnerPageComponent;
  let fixture: ComponentFixture<CottageOwnerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CottageOwnerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CottageOwnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
