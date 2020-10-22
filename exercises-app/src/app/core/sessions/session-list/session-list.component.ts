import { Component, Input, OnInit } from '@angular/core';

import { ExerciseSession, Track } from 'src/app/core/models/track';
import { TrackProgressService } from '../../track-progress.service';


@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit {
  @Input() track: Track;

  // store exercise and session progress
  sessionProgress = {};
  exerciseProgress = {};

  constructor(private progress: TrackProgressService) { }

  ngOnInit(): void {
    // get the progress for all exercises
    this.track.sessions.forEach(session => {
      // get the number of sessions
      this.sessionProgress[session.name] = session.exercises.map(e => this.progress.isSolved(e.id)).filter(e => e).length;

      // go for the exercises
      session.exercises.forEach(e => {
        const status = this.progress.solveStatus(e.id);
        if (status) {
          this.exerciseProgress[e.id] = status;
        }
      });
    });
  }

}
