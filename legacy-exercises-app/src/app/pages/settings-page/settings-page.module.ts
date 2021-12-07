import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClarityModule } from '@clr/angular';

import { SettingsPageComponent } from './settings-page.component';
import { VersionComponent } from './version/version.component';
import { QueryHistoryModule } from 'src/app/core/query-history/query-history.module';



@NgModule({
  declarations: [
    SettingsPageComponent,
    VersionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SettingsPageComponent, pathMatch: 'full'}
    ]),
    ClarityModule,
    QueryHistoryModule,
  ]
})
export class SettingsPageModule { }
