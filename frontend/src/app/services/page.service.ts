import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PageModel } from '../classes/page-model';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<PageModel[]> {
    return this.http.get<PageModel[]>(`${environment.backendURL}/pages`);
  }

  getByTitle(title: string): Observable<PageModel> {
    return this.http.get<PageModel>(`${environment.backendURL}/pages/${title}`);
  }

  search(title: string): Observable<PageModel[]> {
    return this.http.get<PageModel[]>(`${environment.backendURL}/pages/search/${title}`);
  }

}
