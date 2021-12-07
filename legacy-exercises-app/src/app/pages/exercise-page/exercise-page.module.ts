import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClarityModule } from '@clr/angular';

import { ExercisePageComponent } from './exercise-page.component';
import { ExerciseModule } from '../../core/exercise/exercise.module';
import { SessionsModule } from 'src/app/core/sessions/sessions.module';
import { QueryHistoryModule } from 'src/app/core/query-history/query-history.module';
import { DatabaseModule } from 'src/app/core/database/database.module';



@NgModule({
  declarations: [ExercisePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: ':id', component: ExercisePageComponent}
    ]),
    ClarityModule,
    ExerciseModule,
    SessionsModule,
    QueryHistoryModule,
    DatabaseModule,
  ]
})
export class ExercisePageModule { }
