import { Component, Input, OnInit } from '@angular/core';

import { mean, max, min } from 'lodash';

import { Layout, PlotData } from 'plotly.js';
import { CustomEvent } from './../custom-event.model';

@Component({
  selector: 'app-detail-plot',
  templateUrl: './detail-plot.component.html',
  styleUrls: ['./detail-plot.component.scss']
})
export class DetailPlotComponent implements OnInit {
  @Input() set lastEvent(e: CustomEvent) {
    // make pending
    this.pending = true;

    // check the last submitted data
    if (e.activeExample === 'hobo') {
      const ref = e.reference ? mean(e.reference) : this.lastValue;
      const minVal = e.reference ? min(e.reference) : 0;
      const maxVal = e.reference ? max(e.reference) : 25;

      this.data = [{
        type: 'indicator',
        value: e.feature.day,
        title: {text: `HOBO: ${e.feature.device_id}`},
        mode: ref ? 'gauge+number+delta' : 'gauge+number',
        gauge: {axis: {range: [minVal, maxVal]}, bar: {color: '#DB2100'}},
        delta: {reference: ref ? ref : undefined},
        marker: {color: '#DB2100'}
      } as PlotData];
      this.armed = true;
      this.pending = false;

      // store for the next
      this.lastValue = e.feature.day;
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
  lastValue: number;

  constructor() { }

  ngOnInit(): void {
  }

}
