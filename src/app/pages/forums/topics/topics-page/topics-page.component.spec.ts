import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsPageComponent } from './topics-page.component';

describe('TopicsPageComponent', () => {
  let component: TopicsPageComponent;
  let fixture: ComponentFixture<TopicsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
