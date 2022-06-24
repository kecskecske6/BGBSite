import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommandModel } from '../classes/command-model';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<CommandModel[]> {
    return this.http.get<CommandModel[]>(`${environment.backendURL}/commands`);
  }

}
