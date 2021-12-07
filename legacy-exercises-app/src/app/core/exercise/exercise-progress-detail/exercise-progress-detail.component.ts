import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Assignment } from '../../models/progress';
import { TrackProgressService } from '../../track-progress.service';

@Component({
  selector: 'app-exercise-progress-detail',
  templateUrl: './exercise-progress-detail.component.html',
  styleUrls: ['./exercise-progress-detail.component.scss']
})
export class ExerciseProgressDetailComponent implements OnInit, OnDestroy {
  // setter for the current exercise
  private currExerciseId: string;
  @Input() set exerciseId(value: string) {
    this.currExerciseId = value;

    // extract for the current exercise
    this.extractProgressInfo(this.progressService.progress.getValue());
  }

  // manage progress subscription
  progress: Assignment;
  progressSubscription: Subscription;

  // some component settings
  @Input() layout: 'horizontal' | 'vertical' = 'horizontal';


  constructor(private progressService: TrackProgressService) { }

  ngOnInit(): void {
    // subscribe to the current progress
    this.progressSubscription = this.progressService.progress.subscribe({
      next: assignments => this.extractProgressInfo(assignments)
    });
  }

  private extractProgressInfo(allProgress: Assignment[]): void {
    this.progress = allProgress.find(a => a.exerciseId === this.currExerciseId);
  }

  ngOnDestroy(): void {
    this.progressSubscription.unsubscribe();
  }

}
