import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { SessionListComponent } from './session-list/session-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { SessionProgressBarComponent } from './session-progress-bar/session-progress-bar.component';
import { NextExerciseButtonComponent } from './next-exercise-button/next-exercise-button.component';



@NgModule({
  declarations: [
    SessionListComponent,
    ExerciseListComponent,
    SessionProgressBarComponent,
    NextExerciseButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ClarityModule
  ],
  exports: [
    SessionListComponent,
    ExerciseListComponent,
    SessionProgressBarComponent,
    NextExerciseButtonComponent
  ]
})
export class SessionsModule { }
