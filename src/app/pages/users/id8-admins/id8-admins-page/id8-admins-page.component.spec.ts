import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Id8AdminsPageComponent } from './id8-admins-page.component';

describe('Id8AdminsPageComponent', () => {
  let component: Id8AdminsPageComponent;
  let fixture: ComponentFixture<Id8AdminsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Id8AdminsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Id8AdminsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
