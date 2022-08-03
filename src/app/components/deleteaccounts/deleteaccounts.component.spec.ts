import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteaccountsComponent } from './deleteaccounts.component';

describe('DeleteaccountsComponent', () => {
  let component: DeleteaccountsComponent;
  let fixture: ComponentFixture<DeleteaccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteaccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
