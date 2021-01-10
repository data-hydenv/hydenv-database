import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFirestore } from '@angular/fire/firestore';
import * as localforage from 'localforage';
import { clone, cloneDeep } from 'lodash';

import { SettingsService } from './settings.service';
import { TrackProgressService } from './track-progress.service';
import { Exercise } from './models/exercise';
import { Track } from './models/track';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  // the service needs a moment to sync the local files
  syncFinished = new BehaviorSubject<boolean>(false);
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

  constructor(
    private settings: SettingsService,
    private http: HttpClient,
    private firestore: AngularFirestore,
    private progressService: TrackProgressService
  ) {
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
    // reset sync status
    this.syncFinished.next(false);

    // first get local version
    localforage.getItem('versions').then((v: {tracks: number, exercises: number}) => {
      if (v) {
        this.localVersions = v;
      } else {
        // set a negative version to force sync
        this.localVersions = {tracks: -1, exercises: -1};
      }

      // publish
      this.settings.versions.next({
        ...this.settings.versions.getValue(),
        tracks: this.localVersions.tracks,
        exercises: this.localVersions.exercises
      });
    }).then(() => {

      // subscribe to firebase version
      this.firestore.collection('config').doc('sync').valueChanges().subscribe({
        next: (v: {tracks: number, exercises: number}) => {
          // store the versions
          this.remoteVersions = v;

          // check the version
          let trackFinished = false;
          let exFinished = false;
          if (this.localVersions.tracks < this.remoteVersions.tracks) {
            this.syncTracks().then(() => {
              trackFinished = true;
              if (trackFinished && exFinished) {this.syncFinished.next(true); }
            });
          } else {
            this.loadLocalTracks().then(() => {
              trackFinished = true;
              if (trackFinished && exFinished) {this.syncFinished.next(true); }
            });
          }
          if (this.localVersions.exercises < this.remoteVersions.exercises) {
            this.syncExercises().then(() => {
              exFinished = true;
              if (trackFinished && exFinished) {this.syncFinished.next(true); }
            });
          } else {
            this.loadLocalExercises().then(() => {
              exFinished = true;
              if (trackFinished && exFinished) {this.syncFinished.next(true); }
            });
          }

          // mark the sync as finished
//          this.syncFinished.next(true);
        }
      });
    });
  }



  /**
   * Load the current set of tracks from local storage
   */
  private loadLocalTracks(): Promise<void> {
    return localforage.getItem('tracks').then((t: Track[]) => {
      this.tracksCache = t;
      this.tracks.next(this.tracksCache);
    });
  }

  /**
   * Load the current set of exercises from local storage
   */
  private loadLocalExercises(): Promise<void> {
    return localforage.getItem('exercises').then((e: Exercise[]) => {
      this.exerciseCache = e;
      this.exercises.next(this.exerciseCache);
    });
  }

  /**
   * There is version mismatch between the local and remote version
   * of the tracks. Sync and update the local version number.
   */
  private syncTracks(): Promise<void> {
    return new Promise(resolve => {
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
            localforage.setItem('versions', {...this.localVersions, tracks: this.remoteVersions.tracks})
            .then(() => resolve());
          });
        }
      });
    });

  }

  /**
   * THere is a version mismatch between the local and reomte version
   * of the exercises. Sync and update the local version number.
   */
  private syncExercises(): Promise<void> {
    return new Promise(resolve => {
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
            localforage.setItem('versions', {...this.localVersions, exercises: this.remoteVersions.exercises})
              .then(() => resolve());
          });
        }
      });
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
  public executeSql(query: string, explain?: string, disableSafeMode?: boolean): Promise<any> {
    const opt = {params: {sql: query.replace('+', '%2B'), safe: !!disableSafeMode ? 'False' : 'True'}};
    // TODO: for now, only text output EXPLAINs are included
    if (explain) {
      (opt.params as any).explain = explain;
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
        resolve(cloneDeep(exercise));
      } else {
        reject(`ID ${id} not found.`);
      }
    });
  }

  /**
   * Return a copy of the requested Track
   * @param trackId ID of the requested Track
   */
  public getTrackById(trackId: string): Track {
    const track = this.tracksCache.find(t => t.id === trackId);
    if (track) {
      return cloneDeep(track);
    } else {
      console.log(`Track ID='${trackId}' not found.`);
      return null;
    }
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
   * @param session - either 'all' or a list of sessions that shall be included
   */
  public getNextExercise(id: string, session: 'all' | string[]= 'all'): Exercise | null | -1 {
    const track = cloneDeep(this.activeTrack.getValue());
//    console.log(track);
    if (track) {
      // filter sessions if neccessary
      const sessions = session === 'all' ? track.sessions : track.sessions.filter(s => session.includes(s.name));

      // flat map and sort
      const exercises = sessions.flatMap(s => s.exercises.sort((a, b) => a.order - b.order));
//      console.log(exercises);
      const thisIndex = exercises.findIndex(e => e.id === id);
//      console.log(thisIndex);
      // if id is not in current track, return null
      if (thisIndex === -1) {
        return null;
      }

      // check if there is a next exercise
      if (thisIndex === exercises.length - 1) {
        return -1;
      } else {
        const nextId = exercises[thisIndex + 1].id;
        const exercise = this.exerciseCache.find(e => e.id === nextId);
        return exercise ? cloneDeep(exercise) : null;
      }
    }
    return null;
  }

  public getPreviousExercise(id: string, session: 'all' | string[] = 'all'): Exercise | null | -1 {
    const track = cloneDeep(this.activeTrack.getValue());
    if (track) {
      // filter sessions if needed
      const sessions = session === 'all' ? track.sessions : track.sessions.filter(s => session.includes(s.name));

      // flatmap and sort
      const exercises = sessions.flatMap(s => s.exercises.sort((a,b) => a.order - b.order));
      const thisIndex = exercises.findIndex(e => e.id === id);

      // if thisIndex is -1 return null because given id is not known
      if (thisIndex === -1) {
        return null;
      }

      // now we can check for the previous exercise
      if (thisIndex === 0) {
        return -1;
      } else {
        const previousId = exercises[thisIndex - 1].id;
        const exercise = this.exerciseCache.find(e => e.id === previousId);
        return exercise ? cloneDeep(exercise) : null;
      }
    }
    else {
      return null;
    }
  }

  /**
   * Return the next unsolved exercise for the given exercise ID.
   * This function will not return solved exercises.
   * @param id Exercise.id of the current exercise
   * @param session - either 'all' or a list of sessions that shall be included
   */
  public getNextUnsolvedExercise(id: string, session: 'all' | string[]= 'all'): Exercise | null |-1 {
    // get the next
    let nextExercise = this.getNextExercise(id, session);

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
