import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClarityModule } from '@clr/angular';

import { ExerciseListComponent } from './exercise-list.component';


@NgModule({
  declarations: [ExerciseListComponent],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule,
  ],
  exports: [
    ExerciseListComponent
  ]
})
export class ExerciseListModule { }
