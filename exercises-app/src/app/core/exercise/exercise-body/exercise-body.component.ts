import { Component, OnInit, Input } from '@angular/core';
import { ExerciseBody } from '../../models/exercise';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exercise-body',
  templateUrl: './exercise-body.component.html',
  styleUrls: ['./exercise-body.component.scss']
})
export class ExerciseBodyComponent implements OnInit {
  @Input() body: ExerciseBody;

  public content: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    if (this.body) {
      if (this.body.content) {
        this.content = this.body.content;
      } else {
        this.loadFromUrl();
      }
    }
  }

  private loadFromUrl(): void {
    this.http.get(this.body.url).subscribe({
      next: content => console.log(content)
    });
  }

}
