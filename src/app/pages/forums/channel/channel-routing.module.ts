import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelContainerComponent } from './channel-container.component';
import { ChannelsPageComponent } from './channels-page/channels-page.component';
import { ChannelPageComponent } from './channel-page/channel-page.component';
import { CreateChannelPageComponent } from './create-channel-page/create-channel-page.component';

const adminPortalRoutes = [
  {
    path: '',
    component: ChannelContainerComponent,
    children: [
      {
        path: '',
        component: ChannelsPageComponent,
      },
      {
        path: 'edit-channel/:id',
        component: CreateChannelPageComponent,
      },
      {
        path: 'create',
        component: CreateChannelPageComponent,
      },
      {
        path: ':id',
        component: ChannelPageComponent,
      }
    ]
  }
];

// might change depending on the variations with program admin
const routes: Routes = [
  ...adminPortalRoutes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelRoutingModule { }
