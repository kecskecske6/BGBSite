import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'BGBSite';

  pageTitle: string = '';

  constructor(private router: Router, public userService: UserService, private authService: AuthService) {
    if (this.authService.isLoggedIn()) this.userService.setUser(userService.getName()!);
  }

  public logOutOnClick() {
    this.authService.logout();
  }
    
  search(): void {
    this.router.navigate([`wiki/search/${this.pageTitle}`]);
  }

}
