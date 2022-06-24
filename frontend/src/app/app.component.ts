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

  tag: string = localStorage.getItem('tag') ?? '';

  constructor(private router: Router, private userService: UserService, private cookieService: CookieService) {
    if (!this.cookieService.check('user')) this.logout('con');
    if (!localStorage.getItem('tag')) this.getUser();
  }

  search(): void {
    this.router.navigate([`wiki/search/${this.pageTitle}`]);
  }

  getUser(): void {
    this.userService.getUser().subscribe({
      next: result => {
        if (result.hasOwnProperty('userId')) {
          this.tag = (result as UserModel).tag;
          localStorage.setItem('tag', (result as UserModel).tag);
        }
      },
      error: err => { }
    });
  }

  login(): void {
    window.location.href = `${environment.backendURL}/auth/discord`;
  }

  logout(sender: string): void {
    localStorage.clear();
    this.userService.logOut().subscribe({
      next: result => console.log(result),
      error: err => console.log(err)
    });
    this.cookieService.delete('user');
    if (sender == 'button') location.reload();
  }

}
