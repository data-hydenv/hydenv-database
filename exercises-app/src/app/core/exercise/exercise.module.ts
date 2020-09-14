import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseBodyComponent } from './exercise-body/exercise-body.component';



@NgModule({
  declarations: [
    ExerciseBodyComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExerciseBodyComponent,
  ]
})
export class ExerciseModule { }
