import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramAdminRoutingModule } from './program-admins-routing.module';
import { ProgramAdminsPageComponent } from './program-admins-page/program-admins-page.component';


@NgModule({
  declarations: [ProgramAdminsPageComponent],
  imports: [
    CommonModule,
    ProgramAdminRoutingModule
  ]
})
export class ProgramAdminsModule { }
