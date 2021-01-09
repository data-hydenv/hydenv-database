import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryTableComponent } from './history-table/history-table.component';
import { ClarityModule } from '@clr/angular';
import { ClipboardModule } from 'ngx-clipboard';



@NgModule({
  declarations: [
    HistoryTableComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    ClipboardModule,
  ],
  exports: [
    HistoryTableComponent
  ]
})
export class QueryHistoryModule { }
