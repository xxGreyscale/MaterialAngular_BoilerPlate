import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesContainerComponent } from './pages-container/pages-container.component';


const programAdminRoutes: Routes = [
  {
    path: '',
    component: PagesContainerComponent,
    children: [
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(programAdminRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
