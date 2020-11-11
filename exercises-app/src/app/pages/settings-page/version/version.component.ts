import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SettingsService } from 'src/app/core/settings.service';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit, OnDestroy {
  // local reference to versions
  versions: {[key: string]: any} = {};
  versionSubscription: Subscription;

  constructor(private settings: SettingsService) { }

  ngOnInit(): void {
    this.versionSubscription = this.settings.versions.subscribe({
      next: v => this.versions = v
    });
  }

  ngOnDestroy(): void {
    this.versionSubscription.unsubscribe();
  }

}
