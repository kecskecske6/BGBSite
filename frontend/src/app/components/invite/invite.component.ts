import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.sass']
})
export class InviteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=826348423082803230&permissions=268823616&scope=bot%20applications.commands';
  }

}
