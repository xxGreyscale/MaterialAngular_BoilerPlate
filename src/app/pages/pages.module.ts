import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesContainerComponent } from './pages-container/pages-container.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [PagesContainerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
