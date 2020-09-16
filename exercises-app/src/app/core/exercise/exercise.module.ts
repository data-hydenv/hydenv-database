import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';

import { ExerciseBodyComponent } from './exercise-body/exercise-body.component';
import { ExerciseCompareComponent } from './exercise-compare/exercise-compare.component';
import { SqlInputComponent } from './sql-input/sql-input.component';
import { SqlResultModule } from '../sql-result/sql-result.module';



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
    SqlResultModule,
    HighlightModule,
  ],
  exports: [
    ExerciseBodyComponent,
    ExerciseCompareComponent,
    SqlInputComponent,
  ]
})
export class ExerciseModule { }
