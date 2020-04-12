import {Injectable} from '@angular/core';
import { RequestsService } from './request-provider.service';


@Injectable()
export class StorageService {

  constructor(private requestService: RequestsService) {

  }

  saveToken(response) {
    console.log(response)
    const token = {
      createdAt: new Date().getTime(),
      name: 'id8:auth:jwt:token',
      ownerStrategyName: 'email',
      value: response['access_token'],
      user: {},
    };
    localStorage.setItem('auth_app_token', JSON.stringify(token));
  }

  clearTokens() {
    const tokens = ['auth_app_token','user', 'chat_token', 'iframe'];
    for (let i = 0; i < tokens.length; i++) {
      localStorage.removeItem(tokens[i]);
    }
  }
}
