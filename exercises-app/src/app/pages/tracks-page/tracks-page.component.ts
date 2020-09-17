import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { ExerciseService } from '../../core/exercise.service';
import { Track } from 'src/app/core/models/track';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.scss']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracks: Track[] = [];
  tracksSubscription: Subscription;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    // load the available Tracks
    this.tracksSubscription = this.exerciseService.tracks.subscribe({
      next: tracks => this.tracks = tracks
    });
  }

  ngOnDestroy(): void {
    this.tracksSubscription.unsubscribe();
  }

}
