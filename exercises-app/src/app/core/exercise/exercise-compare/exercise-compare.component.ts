import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '../../models/exercise';
import { ExerciseService } from '../../exercise.service';
import { SqlResult } from '../../models/sql-result';

@Component({
  selector: 'app-exercise-compare',
  templateUrl: './exercise-compare.component.html',
  styleUrls: ['./exercise-compare.component.scss']
})
export class ExerciseCompareComponent implements OnInit {
  // store the whole exercise
  @Input() exercise: Exercise;

  // store the results
  userResult: SqlResult;
  solution: SqlResult;

  // component logic
  solutionCorrect = false;
  showSolution = false;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
  }

  /**
   * The user just executed a SQL query to solve the task. Execute
   * the soultion and compare the results.
   * @param result SqlResult from the backend
   */
  onUserInput(result: SqlResult): void {
    this.userResult = result;

    if (!this.solution) {
      // TODO, check the solution content type here
      this.exerciseService.executeSql(this.exercise.solution.content)
      .then((data: SqlResult) => this.solution = data)
      .then(() => this.compare())
      .catch(error => console.log(error));
    } else {
      this.compare();
    }
  }

  /**
   * Compare the user result to the solution.
   */
  private compare(): void {}

}
