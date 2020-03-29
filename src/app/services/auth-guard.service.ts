import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private authService: AuthService, private router: Router) {
   }

   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
     if (this.authService.getToken()) {
       return true;
     }

    //  navigate back to login page
     this.router.navigate(['auth']);

    // save redirect so as after authenication they are returned back to the exact spot
     return false;
   }
}
