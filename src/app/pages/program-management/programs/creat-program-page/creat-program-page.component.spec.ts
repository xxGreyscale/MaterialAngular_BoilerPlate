import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatProgramPageComponent } from './creat-program-page.component';

describe('CreatProgramPageComponent', () => {
  let component: CreatProgramPageComponent;
  let fixture: ComponentFixture<CreatProgramPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatProgramPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatProgramPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
