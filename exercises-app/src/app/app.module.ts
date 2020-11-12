import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClarityModule } from '@clr/angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule, CONFIG, COLLECTION_ENABLED } from '@angular/fire/analytics';
import { CodeEditorModule } from '@ngstack/code-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutsModule } from './layouts/layouts.module';
import { StartupModule } from './core/startup/startup.module';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClarityModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    BrowserAnimationsModule,
    CodeEditorModule.forRoot(),
    LayoutsModule,
    StartupModule,
  ],
  providers: [
    {
      provide: CONFIG,
      useValue: {anonymize_ip: true}
    },
    {
      provide: COLLECTION_ENABLED,
      useValue: false
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
