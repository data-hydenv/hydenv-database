import { Component, OnInit } from '@angular/core';

import { ExerciseService } from '../../core/exercise.service';
import { Track } from 'src/app/core/models/track';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.scss']
})
export class TracksPageComponent implements OnInit {
  tracks: Track[] = [];

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    // load the available Tracks
    this.exerciseService.getTracks().then(t => this.tracks = t);
  }

}
