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
  backendUrlSubscription: Subscription;

  constructor(private settings: SettingsService) { }

  ngOnInit(): void {
    this.backendUrlSubscription = this.settings.backend.subscribe({
      next: url => this.backendUrl = url
    });
  }

  ngOnDestroy(): void {
    this.backendUrlSubscription.unsubscribe();
  }

}
