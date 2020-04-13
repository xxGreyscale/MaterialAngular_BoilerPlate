import { UserContainerComponent } from './user-container.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const adminRoutes = [
  {
    path: '',
    component: UserContainerComponent,
    children: [
      {
        path: 'startups',
        loadChildren: () => import('./start-ups/start-ups.module')
        .then(m => m.StartUpsModule),
      },
      {
        path: 'mentors',
        loadChildren: () => import('./mentors/mentors.module')
        .then(m => m.MentorsModule),
      },
      {
        path: 'program-admins',
        loadChildren: () => import('./program-admins/program-admins.module')
        .then(m => m.ProgramAdminsModule),
      },
      {
        path: 'id8-admins',
        loadChildren: () => import('./id8-admins/id8-admins.module')
        .then(m => m.Id8AdminsModule),
      }
    ]
  }

]
const routes: Routes = [
  ...adminRoutes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
