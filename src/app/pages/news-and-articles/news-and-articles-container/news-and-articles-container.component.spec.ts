import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndArticlesContainerComponent } from './news-and-articles-container.component';

describe('NewsAndArticlesContainerComponent', () => {
  let component: NewsAndArticlesContainerComponent;
  let fixture: ComponentFixture<NewsAndArticlesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAndArticlesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAndArticlesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
