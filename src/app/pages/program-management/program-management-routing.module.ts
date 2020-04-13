import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramManagementContainerComponent } from './program-management-container.component';

const adminRoutes = [
  {
    path: '',
    component: ProgramManagementContainerComponent,
    children: [
      {
        path: 'programs',
        loadChildren: () => import('./programs/programs.module')
              .then(m => m.ProgramsModule),
      },
      {
        path: 'solutions',
        loadChildren: () => import('./solutions/solutions.module')
              .then(m => m.SolutionsModule),
      },
      {
        path: 'program-applications',
        loadChildren: () => import('./program-applications/program-applications.module')
              .then(m => m.ProgramApplicationsModule),
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
export class ProgramManagementRoutingModule { }
