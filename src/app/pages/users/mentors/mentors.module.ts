import { MentorsContainerComponent } from './mentors-container.component';
import { ComponentsModule } from './../../components/components.module';
import { MentorsPageComponent } from './mentors-page/mentors-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorsRoutingModule } from './mentors-routing.module';


@NgModule({
  declarations: [MentorsContainerComponent, MentorsPageComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MentorsRoutingModule
  ]
})
export class MentorsModule { }
