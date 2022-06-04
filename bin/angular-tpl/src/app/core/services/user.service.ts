import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable ,  throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ApiService } from './api.service';
import { LoginDto, SignupDto } from '../models';


@Injectable(
  { providedIn: 'root' }
)
export class UserService {

  constructor(
    private apiService: ApiService,
    private http: HttpClient
  ) { }

  login(body: LoginDto): Observable<void> {
    return this.apiService
    .post("/login", body);
  } 

  signup(body: SignupDto): Observable<void> {
    return this.apiService
    .post("/signup", body);
  } 
}
