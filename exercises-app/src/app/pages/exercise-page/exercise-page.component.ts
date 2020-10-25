import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExerciseService } from '../../core/exercise.service';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Exercise } from '../../core/models/exercise';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-exercise-page',
  templateUrl: './exercise-page.component.html',
  styleUrls: ['./exercise-page.component.scss']
})
export class ExercisePageComponent implements OnInit, OnDestroy {
  exercise: Exercise;
  exerciseId: string;

  // store the sync status of the exercise service
  isSynced = false;
  syncSubscription: Subscription;

  constructor(private exerciseService: ExerciseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // subscribe to sync status of exercises
    this.syncSubscription = this.exerciseService.syncFinished.subscribe({
      next: isFinished => {
        this.isSynced = isFinished;
        if (this.isSynced && this.exerciseId) {
          this.fetchExerciseDoc(this.exerciseId);
        }
      }
    });

    // subscribe to changes in the URL parameter to load
    this.route.paramMap.subscribe({
      next: (params: ParamMap) => {
        this.exerciseId = params.get('id');
        if (this.isSynced) {
          this.fetchExerciseDoc(this.exerciseId);
        }
      }
    });

//    this.exerciseService.getExerciseById('Ydw6xp14NiHexPZz3nmD').then(data => console.log(data));
  }

  fetchExerciseDoc(id: string): void {
    this.exerciseService.getExerciseById(id).then(data => {
      this.exercise = data;
    });
  }

  ngOnDestroy(): void {
    this.syncSubscription.unsubscribe();
  }
}
