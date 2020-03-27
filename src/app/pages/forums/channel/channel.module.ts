import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelRoutingModule } from './channel-routing.module';
import { ChannelContainerComponent } from './channel-container.component';
import { ChannelPageComponent } from './channel-page/channel-page.component';
import { ChannelsPageComponent } from './channels-page/channels-page.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ChannelContainerComponent, ChannelPageComponent, ChannelsPageComponent],
  imports: [
    CommonModule,
    ChannelRoutingModule,
    ReactiveFormsModule,
    MaterialModule,

  ]
})
export class ChannelModule { }
