import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { ConsolePageComponent } from './console-page.component';
import { SqlResultModule } from 'src/app/core/sql-result/sql-result.module';
import { ExerciseModule } from '../../core/exercise/exercise.module';



@NgModule({
  declarations: [ConsolePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ConsolePageComponent, pathMatch: 'full'}
    ]),
    FormsModule,
    ClarityModule,
    SqlResultModule,
    ExerciseModule,
  ]
})
export class ConsolePageModule { }
