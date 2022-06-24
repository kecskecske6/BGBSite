import { Component, OnInit } from '@angular/core';
import { CommandModel } from 'src/app/classes/command-model';
import { CommandService } from 'src/app/services/command.service';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.sass']
})
export class CommandsComponent implements OnInit {

  commands: CommandModel[] = [];

  constructor(private commandService: CommandService) { }

  ngOnInit(): void {
    this.getCommands();
  }

  getCommands(): void {
    this.commandService.getAll().subscribe({
      next: result => this.commands = result.sort((a, b) => a.name < b.name ? -1 : 1),
      error: err => console.log(err)
    });
  }

}
