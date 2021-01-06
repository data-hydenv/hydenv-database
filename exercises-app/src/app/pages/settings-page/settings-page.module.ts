import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClarityModule } from '@clr/angular';
import { ClipboardModule } from 'ngx-clipboard';

import { SettingsPageComponent } from './settings-page.component';
import { VersionComponent } from './version/version.component';
import { HistoryComponent } from './history/history.component';



@NgModule({
  declarations: [SettingsPageComponent, VersionComponent, HistoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SettingsPageComponent, pathMatch: 'full'}
    ]),
    ClarityModule,
    ClipboardModule
  ]
})
export class SettingsPageModule { }
