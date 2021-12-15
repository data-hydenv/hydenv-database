import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClarityModule } from '@clr/angular';
// load plotly
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
PlotlyModule.plotlyjs = PlotlyJS;

import { HomePageComponent } from './home-page.component';
import { MapComponent } from './map/map.component';
import { DetailPlotComponent } from './detail-plot/detail-plot.component';
import { DataPlotComponent } from './data-plot/data-plot.component';
import { ExerciseModule } from 'src/app/core/exercise/exercise.module';




@NgModule({
  declarations: [HomePageComponent, MapComponent, DetailPlotComponent, DataPlotComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: HomePageComponent, pathMatch: 'full'}
    ]),
    ClarityModule,
    PlotlyModule,
    ExerciseModule,
  ]
})
export class HomePageModule { }
