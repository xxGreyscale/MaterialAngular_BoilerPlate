import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChannelPageComponent } from './create-channel-page.component';

describe('CreateChannelPageComponent', () => {
  let component: CreateChannelPageComponent;
  let fixture: ComponentFixture<CreateChannelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateChannelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChannelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
