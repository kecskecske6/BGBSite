import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageModel } from 'src/app/classes/page-model';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-wiki-search',
  templateUrl: './wiki-search.component.html',
  styleUrls: ['./wiki-search.component.sass']
})
export class WikiSearchComponent implements OnInit {

  pages: PageModel[] = [];

  constructor(private pageService: PageService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPages();
  }

  getPages(): void {
    this.activeRoute.params.subscribe(
      routeParams => this.pageService.search(routeParams['title']).subscribe({
        next: result => this.pages = result,
        error: err => console.log(err)
      })
    );
  }

}
