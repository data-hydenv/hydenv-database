import { Injectable } from '@angular/core';

import { SettingsService } from './settings.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  backendUrl: string;

  constructor(private settings: SettingsService, private http: HttpClient) {
    this.settings.backend.subscribe({
      next: url => this.backendUrl = url
    });
  }

  public executeSql(query: string): Promise<any> {
    console.log(this.backendUrl);
    return new Promise((resolve, reject) => {
      this.http.get(this.backendUrl + 'execute', {params: {sql: query}}).subscribe({
        next: res => resolve(res),
        error: error => reject(error)
      });
    });
  }
}
