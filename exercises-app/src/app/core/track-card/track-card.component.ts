import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ExerciseService } from '../exercise.service';
import { ExerciseReference, Track } from '../models/track';
import { TrackProgressService } from '../track-progress.service';


@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss']
})
export class TrackCardComponent implements OnInit, OnDestroy {
  // track input
  @Input() track: Track;

  // exercises and progress
  allExercises: ExerciseReference[] = [];
  finishedExercises: number;


  // component Logic
  showExercises = false;

  // currently active Track, if any
  activeTrackId: string;
  activeTrackSubscription: Subscription;

  constructor(private exerciseService: ExerciseService, private progress: TrackProgressService, private router: Router) { }

  ngOnInit(): void {
    // subscribe to active Track
    this.activeTrackSubscription = this.exerciseService.activeTrack.subscribe({
      next: track => this.activeTrackId = track ? track.id : null
    });

    // extract all exercises
    this.allExercises = this.track.sessions.flatMap(session => session.exercises);
    this.finishedExercises = this.allExercises.map(e => Number(this.progress.isSolved(e.id))).reduce((sum, curr) => sum + curr);
  }

  onStartTrack(): void {
    this.exerciseService.activeTrack.next({...this.track});
    this.router.navigate(['/', 't', this.track.id]);
  }

  ngOnDestroy(): void {
    this.activeTrackSubscription.unsubscribe();
  }
}
