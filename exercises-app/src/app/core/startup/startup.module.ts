import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { StartupComponent } from './startup.component';


@NgModule({
  declarations: [StartupComponent],
  imports: [
    CommonModule,
    ClarityModule,
  ],
  exports: [StartupComponent]
})
export class StartupModule { }
