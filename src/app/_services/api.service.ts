import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  segmentVideoRequest(params) {
    return this.http.post(`${environment.apiUrl}/api/process-interval`, params);
  }

}
