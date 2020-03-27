import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndArticlesListComponent } from './news-and-articles-list.component';

describe('NewsAndArticlesListComponent', () => {
  let component: NewsAndArticlesListComponent;
  let fixture: ComponentFixture<NewsAndArticlesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAndArticlesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAndArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
