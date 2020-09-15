import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SqlResult } from '../../models/sql-result';
import { ExerciseService } from '../../exercise.service';

@Component({
  selector: 'app-sql-input',
  templateUrl: './sql-input.component.html',
  styleUrls: ['./sql-input.component.scss']
})
export class SqlInputComponent implements OnInit {
  @Output() result = new EventEmitter<SqlResult>();

  // input reference
  sql: string;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
  }

  onExecute(): void {
    this.exerciseService.executeSql(this.sql).then((data: SqlResult) => {
      this.result.emit(data);
    }).catch(error => {
      console.log(error);
    });
  }

}
