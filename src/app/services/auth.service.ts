import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUri = 'https://api.y4chub.tech/api/';
  loggedIn: BehaviorSubject<boolean>;


  /**
   *
   * @returns {Observable<T>}
   */
  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }


  getToken(): string {
    return window.localStorage.jwtToken;
  }

  getUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  saveToken(token: string) {
    window.localStorage.jwtToken = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

  buildHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };

    if (this.getToken()) {
      headersConfig['x-auth'] = `${this.getToken()}`;
    }

    return new HttpHeaders(headersConfig);
  }


  login(email: string, password: string) {
    const url = `${this.baseUri}`;

    const headers = this.buildHeaders();

    return new Promise((resolve, reject) => {
      this.http
        .post(url + '/login', {
          email,
          password
        })
        .subscribe(
          (resp: any) => {
            this.loggedIn.next(true);
            this.saveToken(resp.token);
            localStorage.setItem('currentUser', JSON.stringify(resp));
            // this.toastr.success(
            //   resp && resp.name
            //     ? `Welcome ${resp.name}`
            //     : ' Logged in!'
            // );

            resolve({ resp });

          },
          errorResp => {
            console.log(errorResp);
            this.loggedIn.next(undefined);
            // errorResp.error
            //   ? this.toastr.error(errorResp.error)
            //   : this.toastr.error('An unknown error occured.');

            reject(errorResp);
          }
        );
    });

  }

  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('currentUser');
    this.destroyToken();
    }

  constructor(private http: HttpClient) {
    const jwtToken = this.getToken();
    this.loggedIn = new BehaviorSubject<boolean>(jwtToken ? true : false);
  }
}
