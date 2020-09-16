import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracksPageComponent } from './tracks-page.component';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';



@NgModule({
  declarations: [TracksPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: TracksPageComponent, pathMatch: 'full'}
    ]),
    ClarityModule,
  ]
})
export class TracksPageModule { }
