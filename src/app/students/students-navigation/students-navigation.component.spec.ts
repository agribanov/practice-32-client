import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsNavigationComponent } from './students-navigation.component';

describe('StudentsNavigationComponent', () => {
  let component: StudentsNavigationComponent;
  let fixture: ComponentFixture<StudentsNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
