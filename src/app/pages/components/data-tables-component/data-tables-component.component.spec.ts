import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTablesComponentComponent } from './data-tables-component.component';

describe('DataTablesComponentComponent', () => {
  let component: DataTablesComponentComponent;
  let fixture: ComponentFixture<DataTablesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTablesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTablesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
