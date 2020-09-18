import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClarityModule } from '@clr/angular';

import { TrackCardComponent } from './track-card.component';
import { ExerciseListModule } from '../exercise-list/exercise-list.module';


@NgModule({
  declarations: [TrackCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    ClarityModule,
    ExerciseListModule
  ],
  exports: [
    TrackCardComponent
  ]
})
export class TrackCardModule { }
