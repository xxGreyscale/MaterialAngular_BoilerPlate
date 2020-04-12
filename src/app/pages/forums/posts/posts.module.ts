import { ForumPostFormComponent } from './../../components/forms/forum-post-form/forum-post-form.component';
import { ComponentsModule } from './../../components/components.module';
import { DataTablesComponentComponent } from './../../components/data-tables-component/data-tables-component.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { PostsContainerComponent } from './posts-container.component';
import { PostEditPageComponent } from './post-edit-page/post-edit-page.component';


@NgModule({
  declarations: [PostsPageComponent, PostsContainerComponent, PostEditPageComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }

