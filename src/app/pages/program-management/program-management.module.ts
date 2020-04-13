import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramManagementRoutingModule } from './program-management-routing.module';
import { ProgramManagementContainerComponent } from './program-management-container.component';


@NgModule({
  declarations: [ProgramManagementContainerComponent],
  imports: [
    CommonModule,
    ProgramManagementRoutingModule
  ]
})
export class ProgramManagementModule { }
