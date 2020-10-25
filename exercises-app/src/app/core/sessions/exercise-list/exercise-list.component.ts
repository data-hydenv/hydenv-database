import { Component, Input, OnInit } from '@angular/core';
import { ExerciseReference } from '../../models/track';
import { TrackProgressService } from '../../track-progress.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {
  @Input() exercises: ExerciseReference[] = [];

  // store exercises Progress
  exerciseProgress = {};

  constructor(private progress: TrackProgressService) { }

  ngOnInit(): void {
    this.exercises = this.exercises.sort((a, b) => a.order - b.order);
    this.exercises.forEach(e => {
      const status = this.progress.solveStatus(e.id);
      if (status) {
        this.exerciseProgress[e.id] = status;
      }
    });
  }

}
