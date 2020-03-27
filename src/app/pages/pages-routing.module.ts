import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesContainerComponent } from './pages-container/pages-container.component';


const programAdminRoutes: Routes = [
  {
    path: '',
    component: PagesContainerComponent,
    children: [
      {
        path: 'news-and-articles',
        loadChildren: () => import('./news-and-articles/news-and-articles.module')
          .then(m => m.NewsAndArticlesModule),
      },
      {
        path: 'forums/channel',
        loadChildren: () => import('./forums/channel/channel.module')
          .then(m => m.ChannelModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(programAdminRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
