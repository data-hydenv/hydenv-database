import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ExerciseService } from '../../exercise.service';
import { Exercise } from '../../models/exercise';


@Component({
  selector: 'app-previous-exercise-button',
  templateUrl: './previous-exercise-button.component.html',
  styleUrls: ['./previous-exercise-button.component.scss']
})
export class PreviousExerciseButtonComponent implements OnInit, OnDestroy {
  private currentId: string;
  @Input() set exerciseId(value: string) {
    this.currentId = value;
    if (this.isSynced) {
      this.getPrevious();
    }
  }

  // attributes
  @Input() btnClasses: string[] = ['btn-primary'];

  // previous Exercise object
  previousExercise: Exercise;

  // subscribe to exercise sync status
  isSynced = false;
  syncSubscription: Subscription;
  hasActiveTrack = false;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    this.syncSubscription = this.exerciseService.syncFinished.subscribe({
      next: isFinished => {
        this.isSynced = isFinished;
        if (!this.previousExercise) {
          this.getPrevious();
        }
      }
    });
  }

  private getPrevious(): void {
    this.hasActiveTrack = this.exerciseService.activeTrack.getValue() !== null;
    if (this.hasActiveTrack) {
      const previousExercise = this.exerciseService.getPreviousExercise(this.currentId, 'all');
      if (previousExercise && previousExercise !== -1) {
        this.previousExercise = previousExercise as Exercise;
      } else {
        this.previousExercise = null;
      }
    }
  }

  ngOnDestroy(): void {
    this.syncSubscription.unsubscribe();
  }
}
