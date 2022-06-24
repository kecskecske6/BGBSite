import { Component, OnInit } from '@angular/core';
import { PageModel } from 'src/app/classes/page-model';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.sass']
})
export class WikiComponent implements OnInit {

  page: PageModel = new PageModel();

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.getRandomPage();
  }

  getRandomPage(): void {
    this.pageService.getAll().subscribe({
      next: result => this.page = result[Math.floor(Math.random() * result.length)],
      error: err => console.log(err)
    });
  }

}
