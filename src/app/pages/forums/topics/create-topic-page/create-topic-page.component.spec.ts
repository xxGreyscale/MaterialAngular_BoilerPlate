import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTopicPageComponent } from './create-topic-page.component';

describe('CreateTopicPageComponent', () => {
  let component: CreateTopicPageComponent;
  let fixture: ComponentFixture<CreateTopicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTopicPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTopicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
