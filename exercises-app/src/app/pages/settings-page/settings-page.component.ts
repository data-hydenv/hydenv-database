import { Component, OnInit, OnDestroy } from '@angular/core';

import { SettingsService } from 'src/app/core/settings.service';
import { Subscription } from 'rxjs';

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

  constructor(private settings: SettingsService) { }

  ngOnInit(): void {
    this.backendUrlSubscription = this.settings.backend.subscribe({
      next: url => this.backendUrl = url
    });
    this.backendStatusSubscription = this.settings.isConnected.subscribe({
      next: connected => this.backendStatus = connected ? 'online' : 'offline'
    });
  }

  ngOnDestroy(): void {
    this.backendUrlSubscription.unsubscribe();
    this.backendStatusSubscription.unsubscribe();
  }

}
