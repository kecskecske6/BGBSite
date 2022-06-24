import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../classes/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  tag: string = '';

  constructor(private http: HttpClient) { }

  getUser(): Observable<UserModel | object> {
    return this.http.get<UserModel | object>(`${environment.backendURL}/auth`, { withCredentials: true });
  }

  logOut(): Observable<any> {
    return this.http.post<any>(`${environment.backendURL}/auth/logout`, {}, { withCredentials: true });
  }

}
