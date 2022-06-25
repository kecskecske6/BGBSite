import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Observable<boolean>(obs => {
      this.userService.getUser().subscribe({
        next: result => {
          if (result.hasOwnProperty('userId')) obs.next(true);
          else {
            this.router.navigate(['/']);
            obs.next(false);
          }
        },
        error: err => {
          console.log(err);
          this.router.navigate(['/']);
          obs.next(false)
        }
      });
    });
  }

}
