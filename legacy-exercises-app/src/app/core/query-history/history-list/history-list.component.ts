import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QueryRun } from '../../models/query-run.model';
import { QueryHistoryService } from '../../query-history.service';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent implements OnInit {
  // store queries locally
  queries: QueryRun[] = [];
  queriesSubscription: Subscription;

  // controlling the table
  @Input() pageSize = 25;

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
