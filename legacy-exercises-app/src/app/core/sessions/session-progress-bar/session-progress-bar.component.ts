import { TryCatchStmt } from '@angular/compiler';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Assignment } from '../../models/progress';
import { ExerciseReference, Track } from '../../models/track';
import { TrackProgressService } from '../../track-progress.service';

@Component({
  selector: 'app-session-progress-bar',
  templateUrl: './session-progress-bar.component.html',
  styleUrls: ['./session-progress-bar.component.scss']
})
export class SessionProgressBarComponent implements OnInit, OnDestroy {
  // inputs
  trackCache: Track;
  @Input() set track(value: Track) {
    this.trackCache = value;
    this.getExercises();
    this.update();
  }
  @Input() sessions: 'all' | string[] = 'all';
  @Input() mode: 'simple' | 'full' | 'card' = 'simple';

  // assignments
  exercises: ExerciseReference[] = [];
  assignments: Assignment[] = [];
  assignmentSubscription: Subscription;

  // save some info
  total: number;
  solved: number;
  mandatoryTotal: number;
  mandatorySolved: number;

  constructor(private progress: TrackProgressService) { }

  ngOnInit(): void {
    // subscribe to assignments
    this.assignmentSubscription = this.progress.progress.subscribe({
      next: data => {
        this.assignments = data;
        this.update();
      }
    });
  }

  /**
   * Set the exercises
   */
  getExercises(): void {
    if (this.sessions === 'all') {
      this.exercises = this.trackCache.sessions.flatMap(session => session.exercises);
    } else {
      this.exercises = this.trackCache.sessions.filter(s => this.sessions.includes(s.name)).flatMap(s => s.exercises);
    }
  }

  /**
   * Update the progress bars as an assignment was changed.
   */
  private update(): void {
    // count the total number of exercises
    this.total = this.exercises.length;
    this.mandatoryTotal = this.exercises.filter(e => e.mandatory).length;

    // get the solved ones
    const solved = this.assignments.filter(a => a.correct).map(a => a.exerciseId);
    this.solved = this.exercises.filter(e => solved.includes(e.id)).length;
    this.mandatorySolved = this.exercises.filter(e => e.mandatory && solved.includes(e.id)).length;
  }

  ngOnDestroy(): void {
    this.assignmentSubscription.unsubscribe();
  }

}
