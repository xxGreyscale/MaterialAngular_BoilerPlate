import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesContainerComponent } from './pages-container/pages-container.component';


const adminRoutes = [
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
      {
        path: 'users',
        loadChildren: () => import('./users/users.module')
              .then(m => m.UsersModule),
      }
    ]
  },
];

const routes: Routes = [
  ...adminRoutes
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
