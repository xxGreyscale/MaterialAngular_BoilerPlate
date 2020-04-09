import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { TopicsPageComponent } from './topics-page/topics-page.component';
import { CreateTopicPageComponent } from './create-topic-page/create-topic-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { TopicsContainerComponent } from './topics-container.component';
import { TopicsFormComponent} from '../../components/forms/topics-form-component/topics-form-component.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';


@NgModule({
  declarations: [TopicsPageComponent, CreateTopicPageComponent, TopicsContainerComponent, TopicsFormComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialFileInputModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TopicsRoutingModule
  ]
})
export class TopicsModule { }
