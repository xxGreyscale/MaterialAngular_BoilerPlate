import { CreatProgramPageComponent } from './creat-program-page/creat-program-page.component';
import { ProgramsPageComponent } from './programs-page/programs-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const adminRoutes = [
  {
    path: '',
    component: ProgramsPageComponent
  },
  {
    path: 'create',
    component: CreatProgramPageComponent
  }
]
const routes: Routes = [
  ...adminRoutes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
