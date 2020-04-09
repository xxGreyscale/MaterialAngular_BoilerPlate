import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelRoutingModule } from './channel-routing.module';
import { ChannelContainerComponent } from './channel-container.component';
import { ChannelPageComponent } from './channel-page/channel-page.component';
import { ChannelsPageComponent } from './channels-page/channels-page.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChannelFormComponentComponent } from '../../components/forms/channel-form-component/channel-form-component.component';
import { CreateChannelPageComponent } from './create-channel-page/create-channel-page.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
    ChannelContainerComponent,
    ChannelPageComponent,
    ChannelsPageComponent,
    ChannelFormComponentComponent,
    CreateChannelPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialFileInputModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    MaterialModule,
    ChannelRoutingModule,

  ]
})
export class ChannelModule { }
