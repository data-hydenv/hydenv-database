import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracksPageComponent } from './tracks-page.component';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { ExerciseListModule } from '../../core/exercise-list/exercise-list.module';
import { TrackCardModule } from '../../core/track-card/track-card.module';



@NgModule({
  declarations: [TracksPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: TracksPageComponent, pathMatch: 'full'}
    ]),
    ClarityModule,
    TrackCardModule
  ]
})
export class TracksPageModule { }
