import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ExerciseService } from 'src/app/core/exercise.service';
import { SqlResult } from 'src/app/core/models/sql-result';
import { QueryHistoryService } from 'src/app/core/query-history.service';

@Component({
  selector: 'app-console-page',
  templateUrl: './console-page.component.html',
  styleUrls: ['./console-page.component.scss']
})
export class ConsolePageComponent implements OnInit, OnDestroy {
  // result object
  result: SqlResult;

  // trigger for selecting query history layout
  historyUseList = true;

  // subscription for clipboard-copies
  clipboardSubscription: Subscription;

  // property to store default sql
  prefill = 'SELECT count(*) AS amount FROM metadata';

  constructor(private exercise: ExerciseService, private history: QueryHistoryService) { }

  ngOnInit(): void {
    // subscribe to Query history clipboard
    this.clipboardSubscription = this.history.clipboard.subscribe({
      next: queryRun => {
        console.log(queryRun);
        if (queryRun) {
          // set the SQL
          this.prefill = queryRun.body.content;

          // set result, if any
          if (queryRun.result) {
            this.result = queryRun.result;
          }

        }
      }
    });
  }

  onExecute(res: SqlResult): void {
    this.result = res;
  }

  ngOnDestroy(): void {
    this.clipboardSubscription.unsubscribe();
  }

}
