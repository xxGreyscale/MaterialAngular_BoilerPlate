import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorEditPageComponent } from './mentor-edit-page.component';

describe('MentorEditPageComponent', () => {
  let component: MentorEditPageComponent;
  let fixture: ComponentFixture<MentorEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
