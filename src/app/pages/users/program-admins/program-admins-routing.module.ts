import { ProgramAdminsPageComponent } from './program-admins-page/program-admins-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const adminRoutes = [
  {
    path: '',
    component: ProgramAdminsPageComponent
  },
  
]
const routes: Routes = [
  ...adminRoutes
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramAdminRoutingModule { }
