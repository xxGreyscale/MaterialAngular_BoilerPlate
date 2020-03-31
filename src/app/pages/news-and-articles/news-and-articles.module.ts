import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsAndArticlesRoutingModule } from './news-and-articles-routing.module';
import { NewsAndArticlesListComponent } from './news-and-articles-list/news-and-articles-list.component';
import { NewsAndArticlesContainerComponent } from './news-and-articles-container/news-and-articles-container.component';
import { MaterialModule } from 'src/app/material.module';
import { ArticlePageComponent } from './article-page/article-page.component';
import { CreateArticlePageComponent } from './create-article-page/create-article-page.component';
import { ComponentsModule } from '../components/components.module';
import { CreateArticleFormComponent } from '../components/forms/create-article-form/create-article-form.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { EditArticlePageComponent } from './edit-article-page/edit-article-page.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/services/token-interceptor';



@NgModule({
  declarations: [
    NewsAndArticlesContainerComponent,
    NewsAndArticlesListComponent,
    ArticlePageComponent,
    CreateArticlePageComponent,
    CreateArticleFormComponent,
    EditArticlePageComponent,
  ],
  imports: [
    CommonModule,
    MaterialFileInputModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    MaterialModule,
    NewsAndArticlesRoutingModule
  ],
})
export class NewsAndArticlesModule { }
