import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from '../classes/user-model';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class GuildGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Observable<boolean>(obs => {
      this.userService.getUser().subscribe({
        next: result => {
          if (result.hasOwnProperty('userId')) {
            let guild = ((result as UserModel).guilds == undefined ? [] : ((result as UserModel).guilds as unknown) as any[]).find(g => g.id == this.router.url.substring(this.router.url.lastIndexOf('/') + 1));
            if (!guild) {
              this.router.navigate(['/dashboard']);
              obs.next(false);
            }
            else {
              if ((guild.permissions & 0x20) == 0x20) obs.next(true);
              else {
                this.router.navigate(['/dashboard']);
                obs.next(false);
              }
            }
          } else {
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
