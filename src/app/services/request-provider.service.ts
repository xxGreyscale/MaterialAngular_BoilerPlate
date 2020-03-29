import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpEvent, HttpRequest, HttpEventType} from '@angular/common/http';
import { env } from '../../environments/environment';

@Injectable()
export class RequestsService {
  endPoint = '';
  apuiUrl = env.baseURL;

  appendHeaders(): HttpHeaders {
    const chatToken = JSON.parse(localStorage.getItem('chat_token'));
    return new HttpHeaders({
      'X-User-Id': chatToken.userId,
      'X-Auth-Token': chatToken.loginToken
    });
  }

  constructor(private httpClient: HttpClient) {
  }

  constructUrl(endPoint) {
    return `${env.baseURL}${endPoint}`;
  }

  fetch(page = 1, metaParams = {}) {
    let params = '?page=' + page;
    for (let key in metaParams) {
      if (metaParams.hasOwnProperty(key)) {
        params = `${params}&${key}=${metaParams[key]}`;
      }

    }
    return this.httpClient.get(`${env.baseURL}${this.endPoint}${params}`);
  }

  get() {
    return this.httpClient.get(`${env.baseURL}${this.endPoint}`);
  }

  post() {
    return this.httpClient.post(`${env.baseURL}${this.endPoint}`, {});
  }

  create(resource) {
    return this.httpClient.post(`${env.baseURL}${this.endPoint}`, resource);
  }

  update(resource) {
    return this.httpClient.put(`${env.baseURL}${this.endPoint}` + '/' + resource.id, resource);
  }

  update2(resource) {
    return this.httpClient.put(`${env.baseURL}${this.endPoint}`, resource);
  }

  delete(resource) {
    return this.httpClient.delete(`${env.baseURL}${this.endPoint}` + '/' + resource.id);
  }

  getExternal(url) {
    return this.httpClient.get<any[]>(`${url}`);
  }

  uploadFile(file: File, inputName: string, metaData = {}) {
    const formData = new FormData();
    formData.append(inputName, file, file.name);
    for (let key in metaData) {
      if (metaData.hasOwnProperty(key)) {
        formData.append(key, metaData[key]);
      }
    }
    return this.httpClient.post(`${env.baseURL}${this.endPoint}`, formData);
  }

}
