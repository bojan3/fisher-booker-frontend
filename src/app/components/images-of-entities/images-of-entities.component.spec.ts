import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesOfEntitiesComponent } from './images-of-entities.component';

describe('ImagesOfEntitiesComponent', () => {
  let component: ImagesOfEntitiesComponent;
  let fixture: ComponentFixture<ImagesOfEntitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesOfEntitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesOfEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
