import { Component, OnInit } from '@angular/core';

import { ExerciseService } from 'src/app/core/exercise.service';
import { SqlResult } from 'src/app/core/models/sql-result';

@Component({
  selector: 'app-console-page',
  templateUrl: './console-page.component.html',
  styleUrls: ['./console-page.component.scss']
})
export class ConsolePageComponent implements OnInit {
  // result object
  result: SqlResult;

  // trigger for selecting query history layout
  historyUseList = true;

  constructor(private exercise: ExerciseService) { }

  ngOnInit(): void {
  }

  onExecute(res: SqlResult): void {
    this.result = res;
  }

}
