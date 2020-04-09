import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartUpsRoutingModule } from './start-ups-routing.module';
import { StartUpsPageComponent } from './start-ups-page/start-ups-page.component';


@NgModule({
  declarations: [StartUpsPageComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    StartUpsRoutingModule
  ]
})
export class StartUpsModule { }
