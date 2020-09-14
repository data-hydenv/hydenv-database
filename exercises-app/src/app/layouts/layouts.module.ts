import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClarityModule } from '@clr/angular';

import { HeaderComponent } from './header/header.component';
import { FullWidthLayoutComponent } from './full-width-layout/full-width-layout.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';



@NgModule({
  declarations: [
    FullWidthLayoutComponent,
    HeaderComponent,
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule,
  ],
  exports: [
    FullWidthLayoutComponent,
    PageLayoutComponent
  ]
})
export class LayoutsModule { }
