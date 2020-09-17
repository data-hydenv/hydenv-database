import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFirestore } from '@angular/fire/firestore';

import { SettingsService } from './settings.service';
import { Exercise } from './models/exercise';
import { Track } from './models/track';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  backendUrl: string;

  // distribute track information to the application
  tracksCache: Track[] = [];
  tracks = new BehaviorSubject<Track[]>(this.tracksCache);

  constructor(private settings: SettingsService, private http: HttpClient, private firestore: AngularFirestore) {
    this.subscriptions();
  }

  private subscriptions(): void {
    // subscribe to the current backend URL
    this.settings.backend.subscribe({
      next: url => this.backendUrl = url
    });

    // subscribe to changes of the tracks collection in Firestore
    this.firestore.collection<Track>('tracks').snapshotChanges().subscribe({
      next: (refs) => {
        this.tracksCache = refs.map(ref => {
          return {id: ref.payload.doc.id, ...ref.payload.doc.data()};
        });
        this.tracks.next(this.tracksCache);
      }
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

  getTrackIds(): Promise<string[]> {
    return new Promise(resolve => {
      resolve(this.tracksCache.map(t => t.id));
    });
  }
}
