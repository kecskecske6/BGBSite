import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DiscordService {

  constructor(private http: HttpClient) { }

  getBotGuilds(): Observable<any[]> {
    return this.http.get<any>(`${environment.backendURL}/discord/guilds`);
  }

}
