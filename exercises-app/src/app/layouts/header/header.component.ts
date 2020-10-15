import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SettingsService } from 'src/app/core/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  backendConnected = false;
  backendConnectSubscription: Subscription;

  constructor(private settings: SettingsService) { }

  ngOnInit(): void {
    this.backendConnectSubscription = this.settings.isConnected.subscribe({
      next: status => this.backendConnected = status
    });
  }

  onConnect(): void {
    this.settings.requestBackendConnect();
  }

  ngOnDestroy(): void {
    this.backendConnectSubscription.unsubscribe();
  }

}
