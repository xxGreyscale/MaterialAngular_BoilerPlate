import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramAdminsPageComponent } from './program-admins-page.component';

describe('ProgramAdminsPageComponent', () => {
  let component: ProgramAdminsPageComponent;
  let fixture: ComponentFixture<ProgramAdminsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramAdminsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramAdminsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
