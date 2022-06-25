import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../classes/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: UserModel | null = null;

  constructor(private http: HttpClient) { }

  getUser(): Observable<UserModel | object> {
    return this.http.get<UserModel | object>(`${environment.backendURL}/auth`, { withCredentials: true });
  }

  setUser(user: UserModel): void {
    this.user = user;
  }

  logOut(): Observable<any> {
    return this.http.post<any>(`${environment.backendURL}/auth/logout`, {}, { withCredentials: true });
  }

}
