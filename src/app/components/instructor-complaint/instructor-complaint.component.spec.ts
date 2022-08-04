import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorComplaintComponent } from './instructor-complaint.component';

describe('InstructorComplaintComponent', () => {
  let component: InstructorComplaintComponent;
  let fixture: ComponentFixture<InstructorComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
