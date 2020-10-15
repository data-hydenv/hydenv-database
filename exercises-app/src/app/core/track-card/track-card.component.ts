import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ExerciseService } from '../exercise.service';
import { Track } from '../models/track';


@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss']
})
export class TrackCardComponent implements OnInit, OnDestroy {
  // track input
  @Input() track: Track;

  // component Logic
  showExercises = false;

  // currently active Track, if any
  activeTrackId: string;
  activeTrackSubscription: Subscription;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    // subscribe to active Track
    this.activeTrackSubscription = this.exerciseService.activeTrack.subscribe({
      next: track => this.activeTrackId = track ? track.id : null
    });
  }

  onStartTrack(): void {
    this.exerciseService.activeTrack.next({...this.track});
  }

  ngOnDestroy(): void {
    this.activeTrackSubscription.unsubscribe();
  }
}
