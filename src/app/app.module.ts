import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestsService } from './services/request-provider.service';
import { AuthGuardService } from './services/auth-guard.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StorageService } from './services/storage.service';
import { TokenInterceptor } from './services/token-interceptor';
import { CommonModule } from '@angular/common';
import { TableService } from './services/table.service';
import { PageNotFoundComponent } from './miscellaneous/page-not-found/page-not-found.component';
import { DataTableService } from './services/data-table.service';
import { MentorsPageComponent } from './pages/users/mentors/mentors-page/mentors-page.component';

const providers = [
  RequestsService,
  AuthGuardService,
  StorageService,
  TableService,
  DataTableService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
}
];
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [ ...providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
