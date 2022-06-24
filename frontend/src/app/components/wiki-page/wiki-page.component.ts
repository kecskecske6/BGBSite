import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageModel } from 'src/app/classes/page-model';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-wiki-page',
  templateUrl: './wiki-page.component.html',
  styleUrls: ['./wiki-page.component.sass']
})
export class WikiPageComponent implements OnInit {

  page: PageModel = new PageModel();

  constructor(private pageService: PageService, private router: Router) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage(): void {
    this.pageService.getByTitle(this.router.url.substring(this.router.url.indexOf('wiki/') + 5)).subscribe({
      next: result => this.page = result,
      error: err => console.log(err)
    });
  }

}
