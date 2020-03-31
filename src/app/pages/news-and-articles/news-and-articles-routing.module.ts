import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsAndArticlesContainerComponent } from './news-and-articles-container/news-and-articles-container.component';
import { NewsAndArticlesListComponent } from './news-and-articles-list/news-and-articles-list.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { CreateArticlePageComponent } from './create-article-page/create-article-page.component';
import { EditArticlePageComponent } from './edit-article-page/edit-article-page.component';

const childRoutes: Routes = [
  {
    path: '',
    component: NewsAndArticlesListComponent,
  },
  {
    path: 'create',
    component: CreateArticlePageComponent,
  },
  {
    path: 'article/:id',
    component: ArticlePageComponent,
  },
  {
    path: 'editing-article/:id',
    component: EditArticlePageComponent,
  }
];


const routes: Routes = [
  {
    path: '',
    component: NewsAndArticlesContainerComponent,
    children: [
      ...childRoutes
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsAndArticlesRoutingModule { }
