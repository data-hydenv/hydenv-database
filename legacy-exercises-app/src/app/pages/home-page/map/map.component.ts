import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { Layout, PlotData, PlotMouseEvent } from 'plotly.js';
import { PlotlyComponent } from 'angular-plotly.js';
import { Map, MapboxEvent, Popup } from 'mapbox-gl';
import { cloneDeep } from 'lodash';

import { ExerciseService } from 'src/app/core/exercise.service';
import { SqlResult } from 'src/app/core/models/sql-result';
import { CustomEvent } from './../custom-event.model';

import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  // Inputs and outputs
  @Output() traceClicked = new EventEmitter<CustomEvent>();
  @Output() traceFocused = new EventEmitter<CustomEvent>();

  // reference to the plotly object
  @ViewChild(PlotlyComponent) private plotlyComponent: PlotlyComponent;

  // component state
  exampleName: string;

  // setup the layout
  layout = {
    autosize: true,
    showlegend: false,
    margin: {t: 0, b: 0, l: 0, r: 0},
    mapbox: {
      style: 'carto-darkmatter',
      center: {lon: 8.383461377967592, lat: 48.991553942176864},
      zoom: 13.2,
      bearing: 57.2,
      pitch: 42.2
    },
    paper_bgcolor: '#1A2A32',
    plot_bgcolor: '#1A2A32'
  } as Layout;

  // layer array
  data: PlotData[] = [{
    name: 'Example data',
    type: 'scattermapbox',
    lon: [8.383461377967592], lat: [48.991553942176864],
    text: ['Examples are about to be loaded'],
    marker: {size: 24, color: 'cyan'}
  } as PlotData];

  // instances
  plot: any;
  map: Map;
  popup = new Popup();

  // examples
  examplesCache: {[key: string]: any} = {};
  queries = {
    hobo: 'select m.id, device_id, st_x(location) as lon, st_y(location) as lat, avg(value) as day from raw_data  d  JOIN metadata m ON m.id=d.meta_id where variable_id=1 and date_part(\'hour\', tstamp) >= 6  and date_part(\'hour\', tstamp) < 19 group by m.id, lon, lat',
  };


  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
  }

  onPlotlyLoaded(plotlyObject: any): void {
    // store the references
    this.plot = (this.plotlyComponent.plotlyInstance as any)._fullLayout;
    this.map = this.plot.mapbox ? this.plot.mapbox._subplot.map : undefined;

    // add to window in debug mode
    if (!environment.production) {
      (window as any).map = this.map;
    }

    this.hoboExample();
  }

  private hoboExample(): Promise<void> {
    // check if data is available
    if (!this.examplesCache.hobo) {
      this.exerciseService.executeSql('SELECT count(*) as amt FROM metadata;')
      .then((result: SqlResult) => {
        if (result.data[0].amt > 10) {
          this.exerciseService.executeSql(this.queries.hobo)
            .then((res: SqlResult) => {
              this.examplesCache.hobo = cloneDeep(res.data);
              return this.hoboExample();
            });
        } else {
          return new Promise(resolve => {
            console.log('HOBO example has not enough data.');
            resolve();
          });
        }
      });

    } else {
      // data is available
      const d: {device_id: string, lon: number, lat: number, day: number}[] = this.examplesCache.hobo;
      this.data = [{
        name: 'Uni Freiburg Hobo data',
        type: 'scattermapbox',
        lon: d.map(v => v.lon),
        lat: d.map(v => v.lat),
        text: d.map(v => `HOBO ${v.device_id}: ${v.day.toFixed(1)}°C`),
        z: d.map(v => v.day),
        marker: {size: 16, colorscale: 'Reds', color: d.map(v => v.day)}
      } as PlotData];

      // set the current example
      this.exampleName = 'hobo';

      // start animation
      return this.animateHobo(0, true);
    }

  }

  private animateHobo(index: number, rand?: boolean): Promise<void> {
    const rotateFn = (e: MapboxEvent): void => {
      // rotate
      const map = e.target;
      map.rotateTo(
        map.getBearing() + 90 > 360 ? map.getBearing() + 90 - 360 : map.getBearing() + 90,
        { duration: 40000 }
      );
    };
    const idx = rand ? Math.round(Math.random() * this.examplesCache.hobo.length) : index;
    const hobo = (this.examplesCache.hobo as {device_id: string, lon: number, lat: number, day: number}[])[idx];
    // first fly to the new Point
    this.map.flyTo({
      center: {lon: hobo.lon, lat: hobo.lat},
      zoom: Math.random() * 5 + 14,
      bearing: Math.random() * 360,
      duration: 8000
    });
    this.map.on('moveend', rotateFn);

    // emit the focus event
    this.traceFocused.emit({
      activeExample: 'hobo',
      feature: hobo,
      reference: this.examplesCache.hobo.map(h => h.day)
    });

    return new Promise(resolve => {
      // set the Timeout to go to the next point
      const time = Math.round(Math.random() * 25000) + 8000;
      setTimeout(() => {
        this.map.off('moveend', rotateFn);
      }, time);

      if (index + 1 < (this.examplesCache.hobo as any[]).length) {
        setTimeout(() => this.animateHobo(index + 1, rand), time);
      } else {
        setTimeout(() => resolve(), time);
      }
    });
  }

  onPlotlyClicked(e: PlotMouseEvent): void {
    if (!environment.production) {
      console.log(e);
    }

    this.traceClicked.emit({activeExample: this.exampleName, points: e.points});
  }
}
