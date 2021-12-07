import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { StartupComponent } from './startup.component';


@NgModule({
  declarations: [StartupComponent],
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule
  ],
  exports: [StartupComponent]
})
export class StartupModule { }
