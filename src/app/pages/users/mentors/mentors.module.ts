import { MentorsContainerComponent } from './mentors-container.component';
import { ComponentsModule } from './../../components/components.module';
import { MentorsPageComponent } from './mentors-page/mentors-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorsRoutingModule } from './mentors-routing.module';
import { MentorEditPageComponent } from './mentor-edit-page/mentor-edit-page.component';


@NgModule({
  declarations: [MentorsContainerComponent, MentorsPageComponent, MentorEditPageComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MentorsRoutingModule
  ]
})
export class MentorsModule { }
