import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../core/exercise.service';

@Component({
  selector: 'app-exercise-page',
  templateUrl: './exercise-page.component.html',
  styleUrls: ['./exercise-page.component.scss']
})
export class ExercisePageComponent implements OnInit {

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    this.exerciseService.getExerciseById('Ydw6xp14NiHexPZz3nmD').then(data => console.log(data));
  }

}
