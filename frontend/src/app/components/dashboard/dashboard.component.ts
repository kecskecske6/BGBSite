import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/classes/user-model';
import { DiscordService } from 'src/app/services/discord.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  guilds: any[] | undefined = undefined;

  botGuilds: unknown[] = [];

  botGuildIds: string[] = [];

  constructor(private userService: UserService, private discordService: DiscordService) { }

  ngOnInit(): void {
    this.getGuilds();
    this.getBotGuilds();
  }

  getGuilds(): void {
    this.userService.getUser().subscribe({
      next: result => this.guilds = (result as UserModel).guilds,
      error: err => console.log(err)
    });
  }

  getBotGuilds(): void {
    this.discordService.getBotGuilds().subscribe({
      next: result => {
        this.botGuilds = result;
        result.forEach(g => this.botGuildIds.push(g.id));
      },
      error: err => console.log(err)
    });
  }

}
