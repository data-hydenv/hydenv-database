import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisePageComponent } from './exercise-page.component';
import { RouterModule } from '@angular/router';
import { ExerciseModule } from '../../core/exercise/exercise.module';



@NgModule({
  declarations: [ExercisePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: ':id', component: ExercisePageComponent}
    ]),
    ExerciseModule,
  ]
})
export class ExercisePageModule { }
