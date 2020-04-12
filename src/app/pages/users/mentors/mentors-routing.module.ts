import { MentorEditPageComponent } from './mentor-edit-page/mentor-edit-page.component';
import { MentorsPageComponent } from './mentors-page/mentors-page.component';
import { MentorsContainerComponent } from './mentors-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const adminRoutes = [
  {
    path: '',
    component: MentorsPageComponent,
  },
  {
    path: 'create',
    component: MentorEditPageComponent,
  },
  
]
const routes: Routes = [
  ...adminRoutes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorsRoutingModule { }
