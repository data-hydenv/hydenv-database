import { Component, Input, OnInit } from '@angular/core';
import { ExerciseReference, Track } from '../models/track';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {
  @Input() track: Track;

  exercises: ExerciseReference[] = [];

  constructor() { }

  ngOnInit(): void {
    if (this.track) {
      this.exercises = this.track.exercises.sort((a, b) => a.order - b.order);
    }
  }

}
