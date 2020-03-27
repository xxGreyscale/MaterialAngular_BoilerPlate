import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelContainerComponent } from './channel-container.component';
import { ChannelsPageComponent } from './channels-page/channels-page.component';

const adminPortalRoutes = [
  {
    path: '',
    component: ChannelContainerComponent,
    children: [
      {
        path: 'channels',
        component: ChannelsPageComponent
      }
    ]
  }
];

// might change depending on the variations with program admin
const routes: Routes = adminPortalRoutes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelRoutingModule { }
