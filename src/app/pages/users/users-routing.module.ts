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
