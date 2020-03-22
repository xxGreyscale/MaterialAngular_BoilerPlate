import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  endPoint = '';

  appendHeaders(): HttpHeaders {
    return new HttpHeaders({
    });
  }
  constructor(private httpClient: HttpClient) {
  }

  post() {
    return this.httpClient.post(`${env.apiUrl}${this.endPoint}`,{});
  }

  get() {
    return this.httpClient.get(`${env.apiUrl}${this.endPoint}`);
  }

  create(resource) {
    return this.httpClient.post(`${env.apiUrl}${this.endPoint}`, resource);
  }

  update2(resource) {
    return this.httpClient.put(`${env.apiUrl}${this.endPoint}`, resource);
  }

  delete(resource) {
    return this.httpClient.delete(`${env.apiUrl}${this.endPoint}` + '/' + resource.id);
  }


  uploadFile(file: File, inputName: string, metaData = {}) {
    const formData = new FormData();
    formData.append(inputName, file, file.name);
    for (let key in metaData) {
      if (metaData.hasOwnProperty(key)) {
        formData.append(key, metaData[key]);
      }
    }
    return this.httpClient.post(`${env.apiUrl}${this.endPoint}`, formData);
  }
}
