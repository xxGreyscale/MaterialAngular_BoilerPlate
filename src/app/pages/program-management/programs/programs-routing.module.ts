import { ProgramsPageComponent } from './programs-page/programs-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const adminRoutes = [
  {
    path: '',
    component: ProgramsPageComponent
  },
]
const routes: Routes = [
  ...adminRoutes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
