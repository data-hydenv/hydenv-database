import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';

import { ExerciseBodyComponent } from './exercise-body/exercise-body.component';
import { ExerciseCompareComponent } from './exercise-compare/exercise-compare.component';
import { SqlInputComponent } from './sql-input/sql-input.component';



@NgModule({
  declarations: [
    ExerciseBodyComponent,
    ExerciseCompareComponent,
    SqlInputComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
  ],
  exports: [
    ExerciseBodyComponent,
    ExerciseCompareComponent,
    SqlInputComponent,
  ]
})
export class ExerciseModule { }
