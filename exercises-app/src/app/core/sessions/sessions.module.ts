import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { SessionListComponent } from './session-list/session-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SessionListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ClarityModule
  ],
  exports: [
    SessionListComponent
  ]
})
export class SessionsModule { }
