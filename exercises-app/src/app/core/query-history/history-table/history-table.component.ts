import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { QueryRun } from '../../models/query-run.model';
import { QueryHistoryService } from '../../query-history.service';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss']
})
export class HistoryTableComponent implements OnInit, OnDestroy {
  // store queries locally
  queries: QueryRun[] = [];
  queriesSubscription: Subscription;

  constructor(private history: QueryHistoryService) { }

  ngOnInit(): void {
    this.queriesSubscription = this.history.history.subscribe({
      next: queries => this.queries = queries
    });
  }

  ngOnDestroy(): void {
    this.queriesSubscription.unsubscribe();
  }

  onDeleteHistory(): void {
    this.history.deleteHistory();
  }

}
