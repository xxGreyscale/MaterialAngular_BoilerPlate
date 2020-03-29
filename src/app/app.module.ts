import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestsService } from './services/request-provider.service';
import { AuthGuardService } from './services/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './services/storage.service';

const providers = [
  RequestsService,
  AuthGuardService,
  StorageService
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [ ...providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
