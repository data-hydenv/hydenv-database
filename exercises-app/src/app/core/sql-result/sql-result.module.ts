import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlResultComponent } from './sql-result.component';
import { ClarityModule } from '@clr/angular';



@NgModule({
  declarations: [SqlResultComponent],
  imports: [
    CommonModule,
    ClarityModule,
  ],
  exports: [
    SqlResultComponent
  ]
})
export class SqlResultModule { }
