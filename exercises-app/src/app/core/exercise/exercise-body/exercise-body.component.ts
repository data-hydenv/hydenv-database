import { Component, OnInit, Input } from '@angular/core';
import { ExerciseBody } from '../../models/exercise';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exercise-body',
  templateUrl: './exercise-body.component.html',
  styleUrls: ['./exercise-body.component.scss']
})
export class ExerciseBodyComponent implements OnInit {
  @Input() content: ExerciseBody;
  @Input() set body(value: ExerciseBody) {
    this.content = value;
    this.setContentText();
  }

  public contentText: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.setContentText();
  }

  private setContentText(): void {
    if (this.content) {
      if (this.content.content) {
        this.contentText = this.content.content;
      } else {
        this.loadFromUrl();
      }
    }
  }

  private loadFromUrl(): void {
    this.http.get(this.content.url).subscribe({
      next: content => console.log(content)
    });
  }

}
