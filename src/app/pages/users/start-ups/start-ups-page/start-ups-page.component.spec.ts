import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartUpsPageComponent } from './start-ups-page.component';

describe('StartUpsPageComponent', () => {
  let component: StartUpsPageComponent;
  let fixture: ComponentFixture<StartUpsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartUpsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartUpsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
