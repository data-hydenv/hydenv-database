import { Component, Input, OnInit } from '@angular/core';

import { Layout, PlotData } from 'plotly.js';

import { CustomEvent } from '../custom-event.model';
import { ExerciseService } from 'src/app/core/exercise.service';
import { SqlResult } from 'src/app/core/models/sql-result';

@Component({
  selector: 'app-data-plot',
  templateUrl: './data-plot.component.html',
  styleUrls: ['./data-plot.component.scss']
})
export class DataPlotComponent implements OnInit {
  @Input() set lastEvent(e: CustomEvent) {
    // make pending
    this.pending = true;

    // check the last submitted data
    if (e.activeExample === 'hobo') {
      this.loadHoboData(e.feature.id);
      return;
    }

    // if still not returned -> disable
    this.pending = false;
    this.armed = false;
  }

  // layout and data for the plot
  layout = {
    autosize: true,
    paper_bgcolor: '#1A2A32',
    plot_bgcolor: '#1A2A32',
    font: {size: 16, color: '#fff'}
  } as Layout;

  data: PlotData[] = [];

  // component logic
  pending = false;
  armed = false;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
  }

  private loadHoboData(metaId: number | string): void {
    const sql = `SELECT date_trunc('hour', tstamp) as datum, avg(value) as temperature FROM raw_data WHERE meta_id=${metaId} AND variable_id=1 GROUP BY datum ORDER BY datum ASC;`;
    this.exerciseService.executeSql(sql).then((result: SqlResult) => {
      // set the data
      this.data = [{
        type: 'scatter',
        x: result.data.map(row => row.datum),
        y: result.data.map(row => row.temperature),
        mode: 'lines',
        fill: 'tozeroy',
        marker: {size: 12, color: 'DB2100'},
        text: result.data.map(row => `${(row.temperature as number).toFixed(1)}°C`)
      } as PlotData];

      // indicate finished
      this.pending = false;
      this.armed = true;
    }).catch(() => {
      this.pending = false;
      this.armed = false;
    });
  }

}
