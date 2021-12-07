import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryTableComponent } from './history-table/history-table.component';
import { ClarityModule } from '@clr/angular';
import { ClipboardModule } from 'ngx-clipboard';
import { HistoryListComponent } from './history-list/history-list.component';
import { CopyQueryRunComponent } from './copy-query-run/copy-query-run.component';



@NgModule({
  declarations: [
    HistoryTableComponent,
    HistoryListComponent,
    CopyQueryRunComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    ClipboardModule,
  ],
  exports: [
    HistoryTableComponent,
    HistoryListComponent,
    CopyQueryRunComponent,
  ]
})
export class QueryHistoryModule { }
