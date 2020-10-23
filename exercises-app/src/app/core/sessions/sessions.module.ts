import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { SessionListComponent } from './session-list/session-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';



@NgModule({
  declarations: [
    SessionListComponent,
    ExerciseListComponent
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
  ]
})
export class SessionsModule { }
