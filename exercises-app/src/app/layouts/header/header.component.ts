import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SettingsService } from 'src/app/core/settings.service';
import { ExerciseService } from 'src/app/core/exercise.service';
import { Track } from 'src/app/core/models/track';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  // backend status
  backendConnected = false;
  backendConnectSubscription: Subscription;

  // active track information
  activeTrack: Track;
  activeTrackSubscription: Subscription;

  // version
  version = environment.version;

  constructor(private settings: SettingsService, private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    // subscribe to backend status
    this.backendConnectSubscription = this.settings.isConnected.subscribe({
      next: status => this.backendConnected = status
    });

    // subscribe to active Track
    this.activeTrackSubscription = this.exerciseService.activeTrack.subscribe({
      next: track => this.activeTrack = track
    });
  }

  onConnect(): void {
    this.settings.requestBackendConnect();
  }

  ngOnDestroy(): void {
    this.backendConnectSubscription.unsubscribe();
  }

}
