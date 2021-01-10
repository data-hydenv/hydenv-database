import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { isEqual, isEqualWith, isNumber } from 'lodash-es';

import { Exercise } from '../../models/exercise';
import { ExerciseService } from '../../exercise.service';
import { SqlResult } from '../../models/sql-result';

import { TrackProgressService } from '../../track-progress.service';
import { AngularFireAnalytics } from '@angular/fire/analytics';


function rowCustomizer(objValue, othValue) {}

function cellCustomizer(objValue, othValue) {
  if (isNumber(objValue)) {
    return Math.abs(objValue - othValue) < 0.01;
  }
}

@Component({
  selector: 'app-exercise-compare',
  templateUrl: './exercise-compare.component.html',
  styleUrls: ['./exercise-compare.component.scss']
})
export class ExerciseCompareComponent implements OnInit {
  // store the whole exercise
  @Input() exercise: Exercise;

  @Input() set result(value: SqlResult) {
    if (value) {
      this.onUserInput(value);
    }
  }

  // change event - whenever the user checks an exercises, the result is emitted
  @Output() checked = new EventEmitter<boolean>();

  // store the results
  userResult: SqlResult;
  solution: SqlResult;

  // store the state of the explain and safe mode trigger
  @Input() explain = false;
  @Input() safeMode = true;

  // component logic
  solutionCorrect = false;
  showSolution = false;
  showHint = false;

  constructor(private exerciseService: ExerciseService, private progress: TrackProgressService, private analytics: AngularFireAnalytics) { }

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
      const explainMode = this.explain ? 'text' : null;
      console.log(`Explain: ${explainMode} Safe Mode: ${this.safeMode}`);
      // TODO, check the solution content type here
      this.exerciseService.executeSql(this.exercise.solution.content, explainMode, !this.safeMode)
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
  private compare(): void {
    // update the component state
//    if (isEqual(this.userResult.data, this.solution.data)) {
    if (isEqualWith(this.userResult.data, this.solution.data, cellCustomizer)) {
      this.solutionCorrect = true;
      this.showSolution = true;
    } else {
      this.solutionCorrect = false;
    }

    // publish to progress Serice
    this.progress.update(this.exercise.id, this.solutionCorrect).then(() => {
      // emit the checked event, after the progress was saved to local storage
      this.checked.emit(this.solutionCorrect);
    });
  }

  onHintToggle(): void {
    // only if the hint is shown
    if (this.showHint) {
      this.analytics.logEvent('exercise_showHint', {exerciseId: this.exercise.id});
    }
  }

  onSolutionToggle(): void {
    //only if the solution is shown
    if (this.showSolution) {
      this.analytics.logEvent('exercise_showSolution', {exerciseId: this.exercise.id});
    }
  }

}
