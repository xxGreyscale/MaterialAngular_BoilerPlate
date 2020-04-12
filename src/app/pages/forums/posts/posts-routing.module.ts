import { PostEditPageComponent } from './post-edit-page/post-edit-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsContainerComponent } from './posts-container.component';
import { PostsPageComponent } from './posts-page/posts-page.component';

const adminPortalRoutes = [
  {
    path: '',
    component: PostsContainerComponent,
    children: [
      {
        path: '',
        component: PostsPageComponent,
      },
      {
        path: 'create',
        component: PostEditPageComponent,
      },
    ]
  }
];

const routes: Routes = [
  ...adminPortalRoutes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
