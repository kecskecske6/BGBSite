import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsModel } from '../classes/news-model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<NewsModel[]> {
    return this.http.get<NewsModel[]>(`${environment.backendURL}/news`);
  }

  getById(id: string): Observable<NewsModel> {
    return this.http.get<NewsModel>(`${environment.backendURL}/news/${id}`);
  }

  create(data: any): Observable<NewsModel> {
    return this.http.post<NewsModel>(`${environment.backendURL}/news`, data);
  }

}
