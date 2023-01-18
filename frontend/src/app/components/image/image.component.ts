import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.sass']
})
export class ImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = 'https://i.imgur.com/BUZGD3m.png';
  }

}
