import { Component, OnInit } from '@angular/core';
import { SettingsService } from './core/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private settings: SettingsService) {}

  ngOnInit(): void {
    // check if analytics are allowed
    this.settings.checkGoogleAnalyticsEnabled();

    // check if querHistory is enabled
    this.settings.checkQueryHistoryEnabled();
  }
}
