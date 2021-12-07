import { Component, OnInit, Output, EventEmitter, Input, HostListener } from '@angular/core';

import { ClrLoadingState } from '@clr/angular';

import { SqlResult } from '../../models/sql-result';
import { ExerciseService } from '../../exercise.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ResizeEvent } from 'angular-resizable-element';
import { QueryHistoryService } from '../../query-history.service';

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
  @Input() addExplain = false;
  @Output() addExplainChange = new EventEmitter<boolean>();

  // safe mode
  @Input() enableSafeModeTrigger = false;
  @Input() safeMode = true;
  @Output() safeModeChange = new EventEmitter<boolean>();

  // component logic
  btnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  errorMessage: string;
  editorHeight = '95%';

  @HostListener('window:keydown', ['$event'])
  handleKeypress(event: KeyboardEvent): void {
    // if it was [F5] or [Crtl + Enter], run SQL
    if (event.code === 'F5' || (event.code === 'Enter' && event.ctrlKey)) {
      // prevent page refresh
      event.preventDefault();

      // execute the SQL
      this.onExecute();
    }
  }

  constructor(private exerciseService: ExerciseService, private queryHistory: QueryHistoryService) { }

  ngOnInit(): void {
    // store the default SQL for later (unused so far)
    this.defaultSql = this.sql;
  }

  onExecute(): void {
    // reset errors
    this.errorMessage = null;

    // set the button state
    this.btnState = ClrLoadingState.LOADING;
    // check if explain is needed
    const explain = this.addExplain ? 'text' : null;

    // execute the SQL command
    this.exerciseService.executeSql(this.sql, explain, !this.safeMode).then((data: SqlResult) => {
      // emit the result data
      this.result.emit(data);

      // add query to the history - the history will ignore if not enalbed
      this.queryHistory.storeQuery(this.sql, data);

      this.btnState = ClrLoadingState.SUCCESS;
    }).catch((error: HttpErrorResponse) => {
      this.btnState = ClrLoadingState.ERROR;

      if (error.status === 0) {
        this.errorMessage = `The hydenv backend is offline or unreachable. Used URL: ${error.url}`;
      }
    });
  }

  onChange(newSql: string): void {
    this.sql = newSql;
  }

  onReset(): void {
    this.sql = this.defaultSql;
  }

  onResize(event: ResizeEvent): void {
    console.log(event);
    this.editorHeight = event.rectangle.height + 'px';
    window.dispatchEvent(new Event('resize'));
  }

}
