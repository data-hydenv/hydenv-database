import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { Track } from 'src/app/core/models/track';
import { ExerciseService } from '../../core/exercise.service';


@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.scss']
})
export class TrackPageComponent implements OnInit {
  // track info object
  trackId: string;
  track: Track;

  // exercise sync status
  isSynced = false;
  syncSubscription: Subscription;

  constructor(private route: ActivatedRoute, private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    // subscribe to sync status of exercises
    this.syncSubscription = this.exerciseService.syncFinished.subscribe({
      next: isFinished => {
        this.isSynced = isFinished;
        if (this.isSynced && this.trackId) {
          this.track = this.exerciseService.getTrackById(this.trackId);
          this.isActive();
        }
      }
    });

    // subscribe to changes in the URL parameter
    this.route.paramMap.subscribe({
      next: (params: ParamMap) => {
        this.trackId = params.get('trackId');
        if (this.isSynced) {
          this.track = this.exerciseService.getTrackById(this.trackId);
          this.isActive();
        }
      }
    });
  }

  /**
   * Check if this is the active track and if not, publish it as the 
   * active track.
   */
  private isActive(): void {
    const activeTrack = this.exerciseService.activeTrack.getValue();
    if (this.track && (!activeTrack || this.track.id !== activeTrack.id)) {
      this.exerciseService.activeTrack.next(this.track);
    }
  }
}
