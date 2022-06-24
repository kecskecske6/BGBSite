import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/app/classes/news-model';
import { UserModel } from 'src/app/classes/user-model';
import { NewsService } from 'src/app/services/news.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {

  news: NewsModel[] = [];

  userId: string = '';

  constructor(private newsService: NewsService, private userService: UserService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getUser(): void {
    this.userService.getUser().subscribe({
      next: result => {
        if (result.hasOwnProperty('userId')) {
          this.userId = (result as UserModel).userId;
        }
      },
      error: err => console.log(err)
    });
  }

  getNews(): void {
    this.newsService.getAll().subscribe({
      next: result => this.news = result.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()),
      error: err => console.log(err)
    });
  }

}
