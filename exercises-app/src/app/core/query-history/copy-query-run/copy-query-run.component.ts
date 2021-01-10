import { Component, Input, OnInit } from '@angular/core';
import { QueryRun } from '../../models/query-run.model';
import { QueryHistoryService } from '../../query-history.service';

@Component({
  selector: 'app-copy-query-run',
  templateUrl: './copy-query-run.component.html',
  styleUrls: ['./copy-query-run.component.scss']
})
export class CopyQueryRunComponent implements OnInit {
  // the QueryRun object to pass
  @Input() queryRun: QueryRun;

  // default classes
  @Input() btnClasses = ['btn', 'btn-icon'];
  @Input() useIcon = true;
  @Input() label = 'COPY';


  constructor(private history: QueryHistoryService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.history.clipboard.next(this.queryRun);
  }

}
