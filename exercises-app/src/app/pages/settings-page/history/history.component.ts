import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { QueryRun } from 'src/app/core/models/query-run.model';
import { QueryHistoryService } from 'src/app/core/query-history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, OnDestroy {
  // queries
  queries: QueryRun[] = []
  queriesSubcription: Subscription;

  constructor(private history: QueryHistoryService) { }

  ngOnInit(): void {
    this.queriesSubcription = this.history.history.subscribe({
      next: queries => this.queries = queries
    });
  }

  ngOnDestroy(): void {
    this.queriesSubcription.unsubscribe();
  }

  onDeleteHistory(): void {
    this.history.deleteHistory();
  }

}
