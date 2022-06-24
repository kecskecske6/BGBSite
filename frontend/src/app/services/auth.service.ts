import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../interfaces/login-response';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) console.error(`There was an error: ${error.error.message}`);
    else console.error(`The server responded with the following stauts: ${error.status}, the body:\n${error.error}`);
    if (error.status == 401) return throwError('Wrong username or password!');
    else return throwError('There was an unknown error.');
  }

  loginForm(data: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.backendURL}/auth/login`, data, this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }

  setUser(resp: LoginResponse) {
    localStorage.setItem('token', resp.token);
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
    this.userService.logOutUser();
  }

}
