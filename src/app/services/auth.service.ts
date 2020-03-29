import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';

export interface Payload {
  token_type: 'string';
  expires_in: 0;
  access_token: 'string';
  refresh_token: 'string';
  code: 0;
  message: 'string';
  meta: {
    accepted_tos: true
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: BehaviorSubject<boolean>;
  payload: Observable<Payload>;

  /**
   *
   * @returns {Observable<T>}
   */
  isAuthenticated(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }


  getToken() {
    return localStorage.getItem('auth_app_token');
  }

  getUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
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


  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('currentUser');
    this.storage.clearTokens();
    }

  constructor(private http: HttpClient, private storage: StorageService) {
    const jwtToken = this.getToken();
    this.loggedIn = new BehaviorSubject<boolean>(jwtToken ? true : false);
  }
}


