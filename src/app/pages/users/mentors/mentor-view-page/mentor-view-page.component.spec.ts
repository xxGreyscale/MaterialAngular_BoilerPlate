import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorViewPageComponent } from './mentor-view-page.component';

describe('MentorViewPageComponent', () => {
  let component: MentorViewPageComponent;
  let fixture: ComponentFixture<MentorViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
