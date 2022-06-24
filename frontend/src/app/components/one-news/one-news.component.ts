import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsModel } from 'src/app/classes/news-model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-one-news',
  templateUrl: './one-news.component.html',
  styleUrls: ['./one-news.component.sass']
})
export class OneNewsComponent implements OnInit {

  oneNews: NewsModel = new NewsModel();

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.getOneNews();
  }

  getOneNews(): void {
    this.newsService.getById(this.router.url.substring(this.router.url.lastIndexOf('/') + 1)).subscribe({
      next: result => this.oneNews = result,
      error: err => console.log(err)
    });
  }

}
