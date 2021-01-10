import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExerciseService } from '../../core/exercise.service';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Exercise } from '../../core/models/exercise';
import { Subscription } from 'rxjs';
import { SqlResult } from 'src/app/core/models/sql-result';
import { QueryHistoryService } from 'src/app/core/query-history.service';

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

  // passing the sql through to the compare component
  explain = false;
  safeMode = true;
  result: SqlResult;
  prefill: string;

  // trigger for switching the QueryHistory
  historyUseList = false;

  // Subscription to queryRun clipboard
  clipboardSubscription: Subscription;

  // component logic
  forceResultTab = false;      // put in the name of a tab to force-open it

  onSqlExecuted(value: SqlResult) {
    this.result = value;

    // force the result tab
    this.forceResultTab = true;
  }

  constructor(private exerciseService: ExerciseService, private route: ActivatedRoute, private history: QueryHistoryService) { }

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

    // subscribe to clipboard copies
    this.clipboardSubscription = this.history.clipboard.subscribe({
      next: queryRun => {
        if (queryRun) {
          // set the prefill
          this.prefill = queryRun.body.content;

          if (queryRun.result) {
            this.result = queryRun.result;
          }
        }
      }
    });
  }

  fetchExerciseDoc(id: string): void {
    this.exerciseService.getExerciseById(id).then(data => {
      this.exercise = data;
      this.setPrefill();
    });
  }

  private setPrefill(): void {
    if (this.exercise && this.exercise.solution.prefill) {
      this.prefill = this.exercise.solution.prefill;
    } else {
      this.prefill = '-- Put your SQL code here.\n-- If you use semicolons, multiple commands or other Queries than SELECT, you have to disable save Mode';
    }
  }

  ngOnDestroy(): void {
    this.syncSubscription.unsubscribe();
    this.clipboardSubscription.unsubscribe();
  }
}
