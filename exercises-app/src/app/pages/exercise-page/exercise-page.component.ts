import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../core/exercise.service';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Exercise } from '../../core/models/exercise';

@Component({
  selector: 'app-exercise-page',
  templateUrl: './exercise-page.component.html',
  styleUrls: ['./exercise-page.component.scss']
})
export class ExercisePageComponent implements OnInit {
  exercise: Exercise;

  constructor(private exerciseService: ExerciseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // subscribe to changes in the URL parameter to load
    this.route.paramMap.subscribe({
      next: (params: ParamMap) => {
        this.fetchExerciseDoc(params.get('id'));
      }
    });

//    this.exerciseService.getExerciseById('Ydw6xp14NiHexPZz3nmD').then(data => console.log(data));
  }

  fetchExerciseDoc(id: string): void {
    this.exerciseService.getExerciseById(id).then(data => {
      this.exercise = data;
    }).catch(error => {
      console.log(error);
      this.exercise = null;
    });
  }

}
