import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';
import { CodeEditorModule } from '@ngstack/code-editor';
import { ColorPickerModule } from 'ngx-color-picker';

import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
PlotlyModule.plotlyjs = PlotlyJS;
// import { PlotlyViaCDNModule as PlotlyModule } from 'angular-plotly.js';
// PlotlyModule.setPlotlyVersion('latest');
// PlotlyModule.setPlotlyBundle('basic');

import { ExerciseBodyComponent } from './exercise-body/exercise-body.component';
import { ExerciseCompareComponent } from './exercise-compare/exercise-compare.component';
import { SqlInputComponent } from './sql-input/sql-input.component';
import { ResultPlotComponent } from './result-plot/result-plot.component';
import { SqlResultComponent } from './sql-result/sql-result.component';
import { ExerciseProgressDetailComponent } from './exercise-progress-detail/exercise-progress-detail.component';


@NgModule({
  declarations: [
    ExerciseBodyComponent,
    ExerciseCompareComponent,
    SqlInputComponent,
    ResultPlotComponent,
    SqlResultComponent,
    ExerciseProgressDetailComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    CodeEditorModule.forChild(),
    PlotlyModule,
    ColorPickerModule,
  ],
  exports: [
    ExerciseBodyComponent,
    ExerciseCompareComponent,
    SqlInputComponent,
    ResultPlotComponent,
    SqlResultComponent,
    ExerciseProgressDetailComponent,
  ]
})
export class ExerciseModule { }
