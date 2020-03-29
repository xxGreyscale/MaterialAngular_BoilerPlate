import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const adminRoutes = [
  {
    path: '',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

const routes: Routes = [
  ...adminRoutes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
