import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material.module';
import { LoginComponent } from './login/login.component';
import { AuthContainerComponent } from './auth-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestsService } from '../services/request-provider.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StorageService } from '../services/storage.service';

const providers = [
  RequestsService,
  StorageService,
];

@NgModule({
  declarations: [LoginComponent, AuthContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    AuthRoutingModule,
    MaterialModule,
  ],
  providers: [
    ...providers
  ]
})
export class AuthModule { }
