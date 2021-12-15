import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { ConsolePageComponent } from './console-page.component';
import { ExerciseModule } from '../../core/exercise/exercise.module';
import { QueryHistoryModule } from 'src/app/core/query-history/query-history.module';
import { DatabaseModule } from 'src/app/core/database/database.module';



@NgModule({
  declarations: [ConsolePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ConsolePageComponent, pathMatch: 'full'}
    ]),
    FormsModule,
    ClarityModule,
    ExerciseModule,
    QueryHistoryModule,
    DatabaseModule,
  ]
})
export class ConsolePageModule { }
