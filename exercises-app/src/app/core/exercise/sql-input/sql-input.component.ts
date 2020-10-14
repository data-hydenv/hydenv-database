import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Input() sql: string;
  defaultSql: string;
  @Output() sqlChange = new EventEmitter<string>();

  // explain handler
  addExplain = false;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    this.defaultSql = this.sql;
  }

  onExecute(): void {
    let explain = this.addExplain ? 'text' : null;
    this.exerciseService.executeSql(this.sql, explain).then((data: SqlResult) => {
      this.result.emit(data);
    }).catch(error => {
      console.log(error);
    });
  }

  onChange(newSql: string): void {
    this.sql = newSql;
  }

}
