import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

import { Observable ,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


const options = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable(
  { providedIn: 'root' }
)
export class ApiService {
  
  constructor(
    private http: HttpClient
  ) {}
  

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(
      `${environment.api_url}${path}`,
       { params }
    );
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      options
    );
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      options
    );
  }

  delete(path: string): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`
    );
  }
}