import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/classes/user-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-guild-dashboard',
  templateUrl: './guild-dashboard.component.html',
  styleUrls: ['./guild-dashboard.component.sass']
})
export class GuildDashboardComponent implements OnInit {

  guild: any = {};

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getGuild();
  }

  getGuild(): void {
    this.userService.getUser().subscribe({
      next: result => this.guild = ((result as UserModel).guilds as unknown as any[]).find(g => g.id == this.router.url.substring(this.router.url.lastIndexOf('/') + 1)),
      error: err => console.log(err)
    });
  }

}
