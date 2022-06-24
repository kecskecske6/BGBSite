import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userName!: string | null;

  constructor() { }

  logOutUser() {
    localStorage.clear();
    this.userName = null;
  }

  setUser(name: string) {
    this.userName = name;
  }

  getName() {
    return localStorage.getItem('name');
  }

}
