import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsPageComponent } from './topics-page/topics-page.component';
import { CreateTopicPageComponent } from './create-topic-page/create-topic-page.component';
import { TopicsContainerComponent } from './topics-container.component';

const adminForumTopicsRoutes = [
  {
    path: '',
    componenet: TopicsContainerComponent,
    children: [
      {
        path: '',
        component: TopicsPageComponent,
      },
      {
        path: 'create',
        component: CreateTopicPageComponent,
      }
    ]
  },
  
];

const routes: Routes = [
  ...adminForumTopicsRoutes,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicsRoutingModule { }
