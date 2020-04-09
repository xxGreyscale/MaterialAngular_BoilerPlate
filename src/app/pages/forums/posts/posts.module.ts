import { ComponentsModule } from './../../components/components.module';
import { DataTablesComponentComponent } from './../../components/data-tables-component/data-tables-component.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { PostsContainerComponent } from './posts-container.component';


@NgModule({
  declarations: [PostsPageComponent, PostsContainerComponent],
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

