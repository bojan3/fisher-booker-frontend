import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventurePageComponent } from './adventure-page.component';

describe('AdventurePageComponent', () => {
  let component: AdventurePageComponent;
  let fixture: ComponentFixture<AdventurePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventurePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventurePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
