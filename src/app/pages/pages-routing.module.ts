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
        path: 'forums',
        children: [
          {
            path: 'channels',
            loadChildren: () => import('./forums/channel/channel.module')
              .then(m => m.ChannelModule),
          },
          {
            path: 'topics',
            loadChildren: () => import('./forums/topics/topics.module')
              .then(m => m.TopicsModule),
          },
          {
            path: 'posts',
            loadChildren: () => import('./forums/posts/posts.module')
              .then(m => m.PostsModule),
          },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(programAdminRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
