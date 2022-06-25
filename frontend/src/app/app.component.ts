import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { UserModel } from './classes/user-model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'BGBSite';

  pageTitle: string = '';

  user: UserModel | null = null;

  constructor(private router: Router, private userService: UserService, private cookieService: CookieService) {
    if (!this.cookieService.check('connect.sid')) this.logout('con');
    if (!this.user) this.getUser();
  }

  search(): void {
    this.router.navigate([`wiki/search/${this.pageTitle}`]);
  }

  getUser(): void {
    this.userService.getUser().subscribe({
      next: result => {
        if (result.hasOwnProperty('userId')) {
          this.user = result as UserModel;
          this.userService.setUser(this.user);
        }
        else console.log(result);
      },
      error: err => console.log(err)
    });
  }

  login(): void {
    window.location.href = `${environment.backendURL}/auth/discord`;
  }

  logout(sender: string): void {
    this.userService.logOut().subscribe({
      next: result => console.log(result),
      error: err => console.log(err)
    });
    this.cookieService.delete('connect.sid');
    if (sender == 'button') location.reload();
  }

}
