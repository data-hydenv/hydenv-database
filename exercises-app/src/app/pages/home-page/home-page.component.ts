import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../core/exercise.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  allTracks: string[] = [];

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    this.exerciseService.getTrackIds().then(ids => this.allTracks = ids);
  }

}
