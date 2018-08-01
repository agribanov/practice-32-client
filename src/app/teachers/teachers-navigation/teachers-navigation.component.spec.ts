import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersNavigationComponent } from './teachers-navigation.component';

describe('TeachersNavigationComponent', () => {
  let component: TeachersNavigationComponent;
  let fixture: ComponentFixture<TeachersNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
