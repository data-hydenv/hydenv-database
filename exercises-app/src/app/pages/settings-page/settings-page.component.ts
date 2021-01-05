import { Component, OnInit, OnDestroy } from '@angular/core';

import { SettingsService } from 'src/app/core/settings.service';
import { Subscription } from 'rxjs';
import { QueryHistoryService } from 'src/app/core/query-history.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit, OnDestroy {
  backendUrl: string;
  backendStatus = 'offline';

  backendUrlSubscription: Subscription;
  backendStatusSubscription: Subscription;

  analyticsEnabled = false;
  analyticsSubscription: Subscription;

  historyEnabled = false;
  historySubscription: Subscription;

  constructor(private settings: SettingsService, public history: QueryHistoryService) { }

  ngOnInit(): void {
    // backend status subscriptions
    this.backendUrlSubscription = this.settings.backend.subscribe({
      next: url => this.backendUrl = url
    });
    this.backendStatusSubscription = this.settings.isConnected.subscribe({
      next: connected => this.backendStatus = connected ? 'online' : 'offline'
    });

    // google analytics subscription
    this.analyticsSubscription = this.settings.analyticsAllowed.subscribe({
      next: allowed => this.analyticsEnabled = allowed
    });

    // query history subscription
    this.historySubscription = this.history.enabled.subscribe({
      next: enabled => this.historyEnabled = enabled
    });
  }

  ngOnDestroy(): void {
    this.backendUrlSubscription.unsubscribe();
    this.backendStatusSubscription.unsubscribe();
    this.analyticsSubscription.unsubscribe();
    this.historySubscription.unsubscribe();
  }

  toggleAnalytics(): void {
    if (this.analyticsEnabled) {
      this.settings.rejectGoogleAnalytics();
    } else {
      this.settings.enableGoogleAnalytics();
    }
  }

  toggleHistory(): void {
    if (this.historyEnabled) {
      this.settings.rejectQueryHistory();
    } else {
      this.settings.enabledQueryHistory();
    }
  }

}
