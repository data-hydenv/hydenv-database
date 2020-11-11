import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClarityModule } from '@clr/angular';

import { SettingsPageComponent } from './settings-page.component';
import { VersionComponent } from './version/version.component';


@NgModule({
  declarations: [SettingsPageComponent, VersionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SettingsPageComponent, pathMatch: 'full'}
    ]),
    ClarityModule,
  ]
})
export class SettingsPageModule { }
