import { Component, OnInit } from '@angular/core';

import { ExerciseService } from 'src/app/core/exercise.service';
import { SqlResult } from 'src/app/core/models/sql-result';

@Component({
  selector: 'app-console-page',
  templateUrl: './console-page.component.html',
  styleUrls: ['./console-page.component.scss']
})
export class ConsolePageComponent implements OnInit {
  sql = 'SELECT count(*) as amount FROM metadata';

  // result object
  result: SqlResult;

  constructor(private exercise: ExerciseService) { }

  ngOnInit(): void {
  }

  onExecute(): void {
    this.exercise.executeSql(this.sql).then(
      data => {
        console.log(data);
        this.result = data;
      }
    ).catch(
      error => console.log(error)
    );
  }

}
