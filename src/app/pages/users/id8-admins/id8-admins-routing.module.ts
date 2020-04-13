import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Id8AdminsPageComponent } from './id8-admins-page/id8-admins-page.component';

const adminRoutes = [
  {
    path: '',
    component: Id8AdminsPageComponent
  },
  
]
const routes: Routes = [
  ...adminRoutes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Id8AdminsRoutingModule { }
