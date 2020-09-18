import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../models/track';

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss']
})
export class TrackCardComponent implements OnInit {
  // track input
  @Input() track: Track;

  // component Logic
  showExercises = false;

  constructor() { }

  ngOnInit(): void {
  }
}
