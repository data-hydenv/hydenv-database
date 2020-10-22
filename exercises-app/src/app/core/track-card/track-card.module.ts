import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClarityModule } from '@clr/angular';

import { TrackCardComponent } from './track-card.component';
import { SessionsModule } from '../sessions/sessions.module';


@NgModule({
  declarations: [TrackCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    ClarityModule,
    SessionsModule,
  ],
  exports: [
    TrackCardComponent
  ]
})
export class TrackCardModule { }
