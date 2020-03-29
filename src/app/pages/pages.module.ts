import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesContainerComponent } from './pages-container/pages-container.component';
import { MaterialModule } from '../material.module';
import { MenuComponent } from './components/menu/menu.component';
import { ComponentsModule } from './components/components.module';
import { NewsAndArticlesModule } from './news-and-articles/news-and-articles.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../services/token-interceptor';

const providers = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
}
];

@NgModule({
  declarations: [PagesContainerComponent, MenuComponent, ],
  imports: [
    ComponentsModule,
    CommonModule,
    MaterialModule,
    PagesRoutingModule,
    NewsAndArticlesModule,
  ],
  providers: [
    ...providers
  ]
})
export class PagesModule { }
