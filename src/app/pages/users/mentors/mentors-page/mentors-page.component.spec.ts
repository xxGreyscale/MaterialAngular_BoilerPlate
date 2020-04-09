import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsPageComponent } from './mentors-page.component';

describe('MentorsPageComponent', () => {
  let component: MentorsPageComponent;
  let fixture: ComponentFixture<MentorsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
