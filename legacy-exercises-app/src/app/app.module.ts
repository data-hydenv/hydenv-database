import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClarityModule } from '@clr/angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule, ScreenTrackingService, CONFIG, COLLECTION_ENABLED, DEBUG_MODE, APP_NAME, APP_VERSION } from '@angular/fire/analytics';
import { AngularFirePerformanceModule, PerformanceMonitoringService } from '@angular/fire/performance';
import { MonacoEditorModule } from 'ngx-monaco-editor';

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
    AngularFirePerformanceModule,
    BrowserAnimationsModule,
    MonacoEditorModule.forRoot(),
    LayoutsModule,
    StartupModule,
  ],
  providers: [
    ScreenTrackingService,
    {provide: CONFIG, useValue: {anonymize_ip: true}},
    {provide: COLLECTION_ENABLED,useValue: true},
    {provide: DEBUG_MODE, useValue: true},
    {provide: APP_NAME, useValue: environment.firebase.projectId},
    {provide: APP_VERSION, useValue: environment.version},
    PerformanceMonitoringService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
