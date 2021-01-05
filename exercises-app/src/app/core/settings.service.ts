import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { QueryHistoryService } from './query-history.service';

export interface VersionInfo {
  app: string;
  tracks?: number;
  exercises?: number;
  backend?: string;
  python?: string;

}


@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  // backend logic
  private backendUrl = 'http://localhost:5000/api/v1/';
  backend = new BehaviorSubject<string>(this.backendUrl);

  // connection status
  isConnected = new BehaviorSubject<boolean>(false);
  connectRequested = new EventEmitter<void>();
  checkTimoutId: number;
  checkConnection = new BehaviorSubject<boolean>(true);

  // versions
  versions = new BehaviorSubject<VersionInfo>({app: environment.version});

  // analytics settings
  analyticsAllowed = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private analytics: AngularFireAnalytics, private history: QueryHistoryService) {}

  changeBackend(address: string): void {
    if (address.endsWith('api/v1/')) {
      this.backendUrl = address;
    } else {
      this.backendUrl = `${address}api/v1/`;
    }
    this.backend.next(this.backendUrl);
  }

  /**
   * connectRequested Event is emitted, which will be consumed by the
   * startup component.
   */
  public requestBackendConnect(): void {
    this.connectRequested.emit();
  }

  /**
   * Starts the connection autocheck
   */
  public startCheckConnection(): void {
    this.checkTimoutId = window.setTimeout(this.checkBackendConnection.bind(this), 5000);
  }

  /**
   * Stops the connection autocheck
   */
  public stopCheckConnection(): void {
    if (this.checkTimoutId) {
      clearTimeout(this.checkTimoutId);
      this.checkTimoutId = null;
    }
  }

  public checkBackendConnection(): Promise<boolean> {
    return new Promise(resolve => {
      if (!this.backendUrl) {
        this.isConnected.next(false);
        resolve(false);
      }
      this.http.get(this.backendUrl + 'ping').subscribe({
        next: (info: {message: string, version: {[key: string]: any}}) =>  {
          this.isConnected.next(true);

          // publish the backend version
          this.versions.next({
            ...this.versions.getValue(),
            python: info.version.python,
            backend: info.version.hydenv
          });
          resolve(true);
        },
        error: () => {
          this.isConnected.next(false);
          resolve(false);
        }
      });
    });
  }

  public checkGoogleAnalyticsEnabled(): void {
    // check if google analytics is allowed
    const ga = localStorage.getItem('hydenv_allow_ga');

    if (!!ga && ga === 'allow') {
      console.log('Allowing Google Analytics...\nGo to Settings to disable.');
      this.analytics.setAnalyticsCollectionEnabled(true);
        this.analyticsAllowed.next(true);
    } else {
      this.analytics.setAnalyticsCollectionEnabled(false);
      this.analyticsAllowed.next(false);
      console.log('Google Analytics disabled.\nConsider enabling in Settings to improve this application.');
    }

  }

  public enableGoogleAnalytics(): void {
    // first set the token
    localStorage.setItem('hydenv_allow_ga', 'allow');

    // then activate
    this.analytics.setAnalyticsCollectionEnabled(true);
    this.analyticsAllowed.next(true);

    console.log('Enabled anonymous statistics...');
  }

  public rejectGoogleAnalytics(): void {
    // delete the token
    localStorage.removeItem('hydenv_allow_ga');

    // disable ga
    this.analytics.setAnalyticsCollectionEnabled(false);
    this.analyticsAllowed.next(false);

    console.log('Rejected anonymous statistics...');
  }

  /**
   * Check if a hydenv_allow_history is set.
   * If yes, enable the query history
   */
  public checkQueryHistoryEnabled(): void {
    const h = localStorage.getItem('hydenv_allow_history')

    // check if enabled
    if (!!h && h === 'allow') {
      // enable the history
      this.history.enabled.next(true);

      // load
      this.history.init();

      console.log('Activated Query History')
    }
  }

  public enabledQueryHistory(): void {
    // log an analytics event if the history is enabled
    this.analytics.logEvent('history_enabled');

    // set the storage variable
    localStorage.setItem('hydenv_allow_history', 'allow');
    this.checkQueryHistoryEnabled();
  }

  public rejectQueryHistory(): void {
    // log analyitcs event if history is disabled
    this.analytics.logEvent('history_disabled', {historyLength: this.history.history.getValue().length});

    // remove the storage variable
    localStorage.removeItem('hydenv_allow_history');
    this.history.enabled.next(false);

    console.log('Disabled query history');
  }
}
