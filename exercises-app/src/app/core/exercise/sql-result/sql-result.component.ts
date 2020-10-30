import { Component, OnInit, Input } from '@angular/core';
import { SqlResult } from '../../models/sql-result';

@Component({
  selector: 'app-sql-result',
  templateUrl: './sql-result.component.html',
  styleUrls: ['./sql-result.component.scss']
})
export class SqlResultComponent implements OnInit {
  // inputs
  res: SqlResult;
  loading = true;
  @Input()  set result(value: SqlResult) {
    this.loading = true;
    this.res = value;
    this.getResultColumns();
  }
  @Input() explain: SqlResult;

  // datagrid components
  resultColumns: string[] = [];
  total: number;

  constructor() { }

  ngOnInit(): void {
  }

  private getResultColumns(): void {
    this.resultColumns = [];
    this.res.data.forEach(row => {
      Object.keys(row).forEach(key => {
        if (!this.resultColumns.includes(key)) {
          this.resultColumns.push(key);
        }
      });
      this.loading = false;
    });
  }

}
