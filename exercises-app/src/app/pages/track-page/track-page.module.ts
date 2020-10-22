import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { TrackPageComponent } from './track-page.component';
import { SessionsModule } from '../../core/sessions/sessions.module';

@NgModule({
  declarations: [TrackPageComponent],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild([
      {path: ':trackId', component: TrackPageComponent}
    ]),
    SessionsModule,
  ]
})
export class TrackPageModule { }
