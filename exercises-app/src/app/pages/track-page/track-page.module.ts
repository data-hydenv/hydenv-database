import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackPageComponent } from './track-page.component';
import { RouterModule } from '@angular/router';
import { ExerciseListModule } from '../../core/exercise-list/exercise-list.module';



@NgModule({
  declarations: [TrackPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: ':trackId', component: TrackPageComponent}
    ]),
    ExerciseListModule,
  ]
})
export class TrackPageModule { }
