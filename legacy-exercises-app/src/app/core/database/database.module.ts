import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { SchemaInspectorComponent } from './schema-inspector/schema-inspector.component';



@NgModule({
  declarations: [
    SchemaInspectorComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
  ], exports: [
    SchemaInspectorComponent
  ]
})
export class DatabaseModule { }
