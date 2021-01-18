import { Injectable } from '@angular/core';

import * as localforage from 'localforage';

import { Assignment } from './models/progress';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAnalytics } from '@angular/fire/analytics';

@Injectable({
  providedIn: 'root'
})
export class TrackProgressService {
  // progress data
  private progressCache: Assignment[] = [];
  progress = new BehaviorSubject<Assignment[]>(this.progressCache);

  constructor(private analytics: AngularFireAnalytics) {
    // load
    this.loadFromStorage().then(() => {
      this.progress.next(this.progressCache);
    });
  }

  /**
   * Update one of the exercises. After updating, the progress Cache
   * is saved to localstorage.
   * @param id string - id of the exercise the assignment is for
   * @param wasCorrect boolean - indicate if the result was correct.
   */
  public update(id: string, wasCorrect: boolean, timeTook?: number): Promise<void> {
    // check if the assignment has already an entry
    const assignIdx = this.progressCache.findIndex(a => a.exerciseId === id);
    const current = new Date();

    // check if there is already an entry
    if (assignIdx === -1) {
      const assign = {exerciseId: id, date: current, correct: wasCorrect, tries: [current]} as Assignment;

      // add a new entry
      this.progressCache.push(assign);
    } else {
      // update
      const assign = {...this.progressCache[assignIdx]};
      assign.date = current;
      assign.correct = wasCorrect;
      assign.tries.push(current);

      // overwrite
      this.progressCache[assignIdx] = assign;

      // publish the progress
      this.progress.next(this.progressCache);

      // if analytics is enabled, store event
      if (wasCorrect) {
        this.analytics.logEvent('exercise_solved', {
          exerciseId: id,
          onFirst: assignIdx === -1,
          solveTimeSec: timeTook ? timeTook : 0
        });
      } else {
        this.analytics.logEvent('exercise_attempt', {
          exerciseId: id,
          solveTimeSec: timeTook ? timeTook : 0
        });
      }
    }

    // finally save
    return this.save();
  }

  /**
   * Checks id the given exercise is already solved.
   */
  public isSolved(exerciseId: string): boolean {
    const assign = this.progressCache.find(a => a.exerciseId === exerciseId);
    return assign ? assign && assign.correct : false;
  }

  /**
   * Checksthe given exercise. Other than `isSolved`, it returns
   * False if the exercise is tried, but unsolved and `null` if
   * there is no registered solving attempt.
   * @param exerciseId Id of the exercise to be checked
   */
  public solveStatus(exerciseId: string): boolean | null {
    const assign = this.progressCache.find(a => a.exerciseId === exerciseId);
    if (assign) {
      return assign.correct;
    } else {
      return null;
    }
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
