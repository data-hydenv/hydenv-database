import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisePageComponent } from './exercise-page.component';
import { RouterModule } from '@angular/router';
import { ExerciseModule } from '../../core/exercise/exercise.module';
import { SessionsModule } from 'src/app/core/sessions/sessions.module';
import { ClarityModule } from '@clr/angular';
import { QueryHistoryModule } from 'src/app/core/query-history/query-history.module';



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
  ]
})
export class ExercisePageModule { }
