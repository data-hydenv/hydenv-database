import { Injectable } from '@angular/core';

import * as localforage from 'localforage';

import { Assignment } from './models/progress';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackProgressService {
  // progress data
  private progressCache: Assignment[] = [];
  progress = new BehaviorSubject<Assignment[]>(this.progressCache);

  constructor() {
    // load
    this.loadFromStorage().then(() => {
      this.progress.next(this.progressCache);
    });
  }

  /**
   * Update one of the exercises. After updating, the progress Cache
   * is saved to localstorage.
   * @param exerciseId string - id of the exercise the assignment is for
   * @param wasCorrect boolean - indicate if the result was correct.
   */
  public update(exerciseId: string, wasCorrect: boolean): void {
    // check if the assignment has already an entry
    let assignIdx = this.progressCache.findIndex(a => a.exerciseId === exerciseId);
    const current = new Date();

    // check if there is already an entry
    if (assignIdx === -1) {
      const assign = {exerciseId: exerciseId, date: current, correct: wasCorrect, tries: [current]} as Assignment;

      // add a new entry
      this.progressCache.push(assign);
    } else {
      // update
      const assign = {...this.progressCache[assignIdx]};
      assign.date = current;
      assign.correct = wasCorrect;
      assign.tries.push(current);

      // overwrite
      this.progressCache[assignIdx] = assign
    }

    // finally save
    this.save();
  }

  private loadFromStorage(): Promise<void> {
    return new Promise(resolve => {
      // check if there are assignments in the local storage
      localforage.getItem('assignments').then((assign: Assignment[]) => {
        if (assign) {
          this.progressCache = assign;
        } else {
          this.progressCache = [];
        }
      }).then(() => resolve());
    });
  }

  private save(): Promise<void> {
    return new Promise(resolve => {
      // save the current cache to localstorage
      localforage.setItem('assignments', this.progressCache).then(() => resolve());
    });
  }

}
