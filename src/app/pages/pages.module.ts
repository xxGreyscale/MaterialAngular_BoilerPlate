import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesContainerComponent } from './pages-container/pages-container.component';
import { MaterialModule } from '../material.module';
import { MenuComponent } from './components/menu/menu.component';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [PagesContainerComponent, MenuComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
