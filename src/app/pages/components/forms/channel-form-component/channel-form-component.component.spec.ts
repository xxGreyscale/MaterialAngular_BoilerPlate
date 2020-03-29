import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelFormComponentComponent } from './channel-form-component.component';

describe('ChannelFormComponentComponent', () => {
  let component: ChannelFormComponentComponent;
  let fixture: ComponentFixture<ChannelFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
