import {Injectable, Injector} from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpClient,
} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import { AuthService } from './auth.service';


/**
 * TokenInterceptor
 * @see https://angular.io/guide/http#intercepting-all-requests-or-responses
 */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(public http: HttpClient,
                private auth: AuthService,
                private router: Router) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.auth.isAuthenticated().subscribe(result => {
        if (result) {
            const token = this.auth.getToken();
            if (token) {
                request = request.clone({
                    headers: request.headers.set('Authorization', 'Bearer ' + token),
                } );
            }
        }
    });

    return next.handle(request).pipe(
        catchError((error: any) => {
            if (error.status === 401) {
                if (error.message === 'Token is exp') {
                    // TODO: Token refreshing

                    
                } else {
                    // Logout from account or do some other stuff
                    // return this.handle401Error(request, next);
                    this.auth.logout();
                    this.router.navigate(['/auth/login']);
                }
            }
            if (error.status === 403) {
                this.router.navigate(['/pages/403']);
            }
            return throwError(error);
          }),
    );
}
}
