import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsFormComponentComponent } from './topics-form-component.component';

describe('TopicsFormComponentComponent', () => {
  let component: TopicsFormComponentComponent;
  let fixture: ComponentFixture<TopicsFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
