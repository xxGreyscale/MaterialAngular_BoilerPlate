import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Id8AdminsRoutingModule } from './id8-admins-routing.module';
import { Id8AdminsPageComponent } from './id8-admins-page/id8-admins-page.component';


@NgModule({
  declarations: [Id8AdminsPageComponent],
  imports: [
    CommonModule,
    Id8AdminsRoutingModule
  ]
})
export class Id8AdminsModule { }
