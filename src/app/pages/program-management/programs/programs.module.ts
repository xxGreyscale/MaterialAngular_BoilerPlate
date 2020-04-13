import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramsPageComponent } from './programs-page/programs-page.component';
import { CreatProgramPageComponent } from './creat-program-page/creat-program-page.component';


@NgModule({
  declarations: [ProgramsPageComponent, CreatProgramPageComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ProgramsRoutingModule
  ]
})
export class ProgramsModule { }
