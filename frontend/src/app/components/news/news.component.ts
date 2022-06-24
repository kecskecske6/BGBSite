import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/app/classes/news-model';
import { NewsService } from 'src/app/services/news.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {

  news: NewsModel[] = [];

  constructor(private newsService: NewsService, public userService: UserService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    this.newsService.getAll().subscribe({
      next: result => this.news = result.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()),
      error: err => console.log(err)
    });
  }

}
