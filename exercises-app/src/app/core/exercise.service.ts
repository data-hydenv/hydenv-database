import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFirestore } from '@angular/fire/firestore';
import * as localforage from 'localforage';

import { SettingsService } from './settings.service';
import { TrackProgressService } from './track-progress.service';
import { Exercise } from './models/exercise';
import { Track } from './models/track';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  backendUrl: string;

  // distribute track information to the application
  private tracksCache: Track[] = [];
  tracks = new BehaviorSubject<Track[]>(this.tracksCache);
  activeTrack = new BehaviorSubject<Track>(null);

  // distribute exercise information to the application
  private exerciseCache: Exercise[] = [];
  exercises = new BehaviorSubject<Exercise[]>(this.exerciseCache);

  // sync settings
  localVersions: {tracks: number, exercises: number};
  remoteVersions: {tracks: number, exercises: number};

  constructor(private settings: SettingsService, private http: HttpClient, private firestore: AngularFirestore, private progressService: TrackProgressService) {
    // handle subscriptions
    this.subscriptions();

    // and check sync status
    this.checkSyncStatus();
  }

  /**
   * Subscribe to Firestore and check if a sync is necessary.
   * Subscribe to tracks and exercises only if out of sync.
   */
  private checkSyncStatus(): void {
    // first get local version
    localforage.getItem('versions').then((v: {tracks: number, exercises: number}) => {
      if (v) {
        this.localVersions = v;
      } else {
        // set a negative version to force sync
        this.localVersions = {tracks: -1, exercises: -1};
      }
    }).then(() => {

      // subscribe to firebase version
      this.firestore.collection('config').doc('sync').valueChanges().subscribe({
        next: (v: {tracks: number, exercises: number}) => {
          // store the versions
          this.remoteVersions = v;

          // check the version
          if (this.localVersions.tracks < this.remoteVersions.tracks) {
            this.syncTracks();
          } else {
            this.loadLocalTracks();
          }
          if (this.localVersions.exercises < this.remoteVersions.exercises) {
            this.syncExercises();
          } else {
            this.loadLocalExercises();
          }
        }
      });
    });
  }

  /**
   * Load the current set of tracks from local storage
   */
  private loadLocalTracks(): void {
    localforage.getItem('tracks').then((t: Track[]) => {
      this.tracksCache = t;
      this.tracks.next(this.tracksCache);
    });
  }

  /**
   * Load the current set of exercises from local storage
   */
  private loadLocalExercises(): void {
    localforage.getItem('exercises').then((e: Exercise[]) => {
      this.exerciseCache = e;
      this.exercises.next(this.exerciseCache);
    });
  }

  /**
   * There is version mismatch between the local and remote version
   * of the tracks. Sync and update the local version number.
   */
  private syncTracks(): void {
    this.firestore.collection<Track>('tracks').snapshotChanges().subscribe({
      next: refs => {
        this.tracksCache = refs.map(ref => {
          return {id: ref.payload.doc.id, ...ref.payload.doc.data()};
        });

        // save to storage
        localforage.setItem('tracks', this.tracksCache).then(() => {
          // publish new tracks
          this.tracks.next(this.tracksCache);

          // set new version
          localforage.setItem('versions', {...this.localVersions, tracks: this.remoteVersions.tracks});
        });
      }
    });
  }

  /**
   * THere is a version mismatch between the local and reomte version
   * of the exercises. Sync and update the local version number.
   */
  private syncExercises(): void {
    this.firestore.collection<Exercise>('exercises').snapshotChanges().subscribe({
      next: refs => {
        this.exerciseCache = refs.map(ref => {
          return {id: ref.payload.doc.id, ...ref.payload.doc.data()};
        });

        // save to storage
        localforage.setItem('exercises', this.exerciseCache).then(() => {
          // publish new exercises
          this.exercises.next(this.exerciseCache);

          // set the new exercise version
          localforage.setItem('versions', {...this.localVersions, exercises: this.remoteVersions.exercises});
        });
      }
    });
  }

  private subscriptions(): void {
    // subscribe to the current backend URL
    this.settings.backend.subscribe({
      next: url => this.backendUrl = url
    });
  }

  /**
   * Execute a given SQL query against the database backend.
   * @param query - SQL query.
   */
  public executeSql(query: string, explain?: string): Promise<any> {
    const opt = {params: {sql: query}};
    // TODO: for now, only text output EXPLAINs are included
    if (explain) {
      opt.params['explain'] = explain;
    }

    return new Promise((resolve, reject) => {
      this.http.get(this.backendUrl + 'execute', opt).subscribe({
        next: res => resolve(res),
        error: error => reject(error)
      });
    });
  }

  getExerciseById(id: string): Promise<Exercise> {
    return new Promise((resolve, reject) => {
      const exercise = this.exerciseCache.find(e => e.id === id);
      if (exercise) {
        resolve(exercise);
      } else {
        reject();
      }
    });
  }

  getTrackIds(): Promise<string[]> {
    return new Promise(resolve => {
      resolve(this.tracksCache.map(t => t.id));
    });
  }

  /**
   * Return the next exercise for the given exercise ID.
   * This will return  the next chronological exercise, even if it was
   * already solved.
   * Returns the exercise, -1 if it was the last and null if the id was not found.
   * @param id Exercise.id of the current exercise
   */
  public getNextExercise(id: string): Exercise | null | -1 {
    const track = this.activeTrack.getValue();
    if (track) {
      const exercises = track.exercises.sort((a, b) => b.order - a.order);
      const thisIndex = exercises.findIndex(e => e.id === id);
      // if id is not in current track, return null
      if (thisIndex === -1) {
        return null;
      }

      // check if there is a next exercise
      if (thisIndex + 1 === exercises.length) {
        return -1;
      } else {
        const nextId = exercises[thisIndex + 1].id;
        const exercise = this.exerciseCache.find(e => e.id === nextId);
        return exercise ? exercise : null;
      }
    }
    return null;
  }

  /**
   * Return the next unsolved exercise for the given exercise ID.
   * This function will not return solved exercises.
   * @param id Exercise.id of the current exercise
   */
  public getNextUnsolvedExercise(id: string): Exercise | null |-1 {
    // get the next
    let nextExercise = this.getNextExercise(id);

    // search for unsolved
    while (nextExercise !== -1) {
      if (nextExercise && this.progressService.isSolved(nextExercise.id)) {
        return nextExercise;
      } else {
        nextExercise = this.getNextExercise(nextExercise.id);
      }
    }

    // while will search until an Exercise or -1 is returned
    // thus, if this code is reached, the requested Exercise was the last unsolved
    return -1;
  }
}
