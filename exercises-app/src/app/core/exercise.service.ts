import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFirestore } from '@angular/fire/firestore';

import { SettingsService } from './settings.service';
import { Exercise } from './models/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  backendUrl: string;

  constructor(private settings: SettingsService, private http: HttpClient, private firestore: AngularFirestore) {
    this.settings.backend.subscribe({
      next: url => this.backendUrl = url
    });
  }

  /**
   * Execute a given SQL query against the database backend.
   * @param query - SQL query.
   */
  public executeSql(query: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.backendUrl + 'execute', {params: {sql: query}}).subscribe({
        next: res => resolve(res),
        error: error => reject(error)
      });
    });
  }

  getExerciseById(id: string): Promise<Exercise> {
    return new Promise(resolve => {
      this.firestore.collection('exercises').doc(id).get().subscribe({
        next: doc => resolve(doc.data() as Exercise)
      });
    });
  }
}
