import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExerciseService } from '../../exercise.service';
import { Exercise } from '../../models/exercise';

@Component({
  selector: 'app-next-exercise-button',
  templateUrl: './next-exercise-button.component.html',
  styleUrls: ['./next-exercise-button.component.scss']
})
export class NextExerciseButtonComponent implements OnInit, OnDestroy {
  private currId: string;
  @Input() set exerciseId(value: string) {
    this.currId = value;
    if (this.isSynced) {
      this.getNext();
    }
  }
  @Input() session: 'all' | string[] = 'all';
  @Input() onlyUnsolved = false;
  @Input() btnClasses: string[] = ['btn-primary'];

  // next Exercise Object
  nextExericse: Exercise;

  // subscribe to exercise sync status
  isSynced = false;
  syncSubscription: Subscription;
  hasActiveTrack = false;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    this.syncSubscription = this.exerciseService.syncFinished.subscribe({
      next: isFinished => {
        this.isSynced = isFinished;
        if (!this.nextExericse) {
          this.getNext();
        }
      }
    });
  }

  private getNext(): void {
    this.hasActiveTrack = this.exerciseService.activeTrack.getValue() !== null;
    if (this.hasActiveTrack) {
      let nextExericse: Exercise | null | -1;
      if (this.onlyUnsolved) {
        nextExericse = this.exerciseService.getNextUnsolvedExercise(this.currId, this.session);
      } else {
        nextExericse = this.exerciseService.getNextExercise(this.currId, this.session);
        console.log(nextExericse);
      }
      if (nextExericse && nextExericse !== -1) {
        this.nextExericse = nextExericse as Exercise;
      } else {
        this.nextExericse = null;
      }
    }
  }

  ngOnDestroy(): void {
    this.syncSubscription.unsubscribe();
  }
}
