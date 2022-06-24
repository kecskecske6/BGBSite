import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-new-news',
  templateUrl: './new-news.component.html',
  styleUrls: ['./new-news.component.sass']
})
export class NewNewsComponent implements OnInit {

  news = {
    title: '',
    heading: '',
    content: '',
    imageURL: ''
  }

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
  }

  addNews(): void {
    this.newsService.create(this.news).subscribe({
      next: result => this.router.navigate(['/news']),
      error: err => console.log(err)
    });
  }

}
