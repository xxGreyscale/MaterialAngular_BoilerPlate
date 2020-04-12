import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from 'src/app/material.module';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { ChannelFormComponentComponent } from './forms/channel-form-component/channel-form-component.component';
import { DataTablesComponentComponent } from './data-tables-component/data-tables-component.component';
import { ForumPostFormComponent } from './forms/forum-post-form/forum-post-form.component';
import { MentorFormComponent } from './forms/mentor-form/mentor-form.component';


@NgModule({
  declarations: [HeaderComponent, DataTablesComponentComponent, ForumPostFormComponent, MentorFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    MaterialModule,
  ], 
  exports: [
    DataTablesComponentComponent, HeaderComponent, ForumPostFormComponent, MentorFormComponent
  ]
})
export class ComponentsModule { }
