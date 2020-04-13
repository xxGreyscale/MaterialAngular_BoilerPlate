import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramsPageComponent } from './programs-page/programs-page.component';


@NgModule({
  declarations: [ProgramsPageComponent],
  imports: [
    CommonModule,
    ProgramsRoutingModule
  ]
})
export class ProgramsModule { }
