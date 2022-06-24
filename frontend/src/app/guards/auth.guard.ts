import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NewNewsComponent } from '../components/new-news/new-news.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor() { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (route.component == NewNewsComponent) {
      if (localStorage.getItem('tag') == 'kecskécske6#4166') return true;
      return false;
    }
    if (localStorage.getItem('tag')) return true;
    return false;
  }

}
