import { Component, Input, OnInit } from '@angular/core';

import { cloneDeep, isNumber, sum } from 'lodash';
import { Layout, PlotData, Margin } from 'plotly.js';
import * as wkt from 'wellknown';

function isValidDate(date): boolean {
  return date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date);
}

export interface Attribute {
  name: string;
  type: 'numeric' | 'text' | 'lonLat' | 'linestring' | 'polygon' | 'datetime';
  data: number[] | string[] | Date[] | any[];
}

const TYPEMAP = {
  line: 'scatter',
  scatter: 'scatter',
  bar: 'bar',
  histogram: 'bar'
};
const MODEMAP = {
  line: 'lines+markers',
  scatter: 'markers'
};


@Component({
  selector: 'app-result-plot',
  templateUrl: './result-plot.component.html',
  styleUrls: ['./result-plot.component.scss']
})
export class ResultPlotComponent implements OnInit {
  // input data
  rawData: {[key: string]: any}[];
  @Input() set data(value: {[key: string]: any}[]) {
    this.rawData = value;
    this.extractAttributes();
  }

  // attributes
  attributeNames: string[] = [];
  allAttributes: Attribute[] = [];

  // plot management
  axesLabel: {name: string, idx: number[], color: string}[] = [];
  axes: PlotData[] = [];
  layout: Layout = {
    autosize: true,
    plot_bgcolor: '#1A2A32',
    paper_bgcolor: '#1A2A32',
    barmode: 'stack',
    showlegend: false,
    font: {
      size: 18,
      color: '#fff'
    },
    mapbox: {
      style: 'carto-darkmatter',
      pitch: 25
    },
  } as Layout;

  // selects
  plotTypes: ('line' | 'scatter' | 'bar' | 'map')[] = [];
  selectedPlotType: 'line' | 'scatter' | 'bar' | 'map';
  xAxisAttributeOptions: string[] = [];
  selectedXAttribute: string;
  yAxisAttributeOptions: string[] = [];
  selectedYAttribute: string;

  // component management
  loading = true;

  constructor() { }

  ngOnInit(): void {
  }

  onPlotTypeChanged(): void {
    this.axes = [];
    // check plot types
    // line
    if (this.selectedPlotType === 'line' || this.selectedPlotType === 'bar') {
      this.xAxisAttributeOptions = this.allAttributes.filter(a => ['numeric', 'datetime', 'text'].includes(a.type)).map(a => a.name);
      this.yAxisAttributeOptions = this.allAttributes.filter(a => a.type === 'numeric').map(a => a.name);
    }

    // scatter
    if (this.selectedPlotType === 'scatter') {
      this.xAxisAttributeOptions = this.allAttributes.filter(a => a.type === 'numeric').map(a => a.name);
      this.yAxisAttributeOptions = this.allAttributes.filter(a => a.type === 'numeric').map(a => a.name);

    }

    // map
    if (this.selectedPlotType === 'map') {
      this.xAxisAttributeOptions = this.allAttributes.filter(a => ['lonLat', 'linestring', 'polygon'].includes(a.type)).map(a => a.name);
      this.yAxisAttributeOptions = this.allAttributes.filter(a => a.type === 'numeric').map(a => a.name);

      // change layout options
      this.layout.margin = {t: 0, b: 0, l: 0, r: 0} as Margin;
    } else {
      this.layout.margin = null;
    }

    // de-select current selection
    this.selectedXAttribute = null;
    this.selectedYAttribute = null;
  }

  onColorChange(labelIdx: number): void {
    const col = this.axesLabel[labelIdx].color;
    this.axesLabel[labelIdx].idx.forEach(idx => {
      this.axes[idx].marker.color = col;
      if ((this.axes[idx].marker as any).fillcolor) {
        (this.axes[idx].marker as any).fillcolor = col;
      }
    });
  }

  onChangeSizeFromData(labelIdx: number, dataAttributeName?: string): void {
    const attr = this.allAttributes.find(a => a.name === dataAttributeName);
    const z = attr ? [...attr.data] : null;
    this.axesLabel[labelIdx].idx.forEach(idx => {
      this.axes[idx].marker.size = z;
    });

  }

  private convertMapLayer(geomattr: Attribute, attr?: Attribute): PlotData[] | any[] {
    // add points
    if (geomattr.type === 'lonLat') {
      const g = {
        name: attr ? attr.name : geomattr.name,
        lon: [...(geomattr.data as any[]).map(geom => geom.coordinates[0])],
        lat: [...(geomattr.data as any[]).map(geom => geom.coordinates[1])],
        type: 'scattermapbox',
        mode: geomattr.type === 'lonLat' ? 'markers' : 'lines'
      } as PlotData;
      if (attr) {
        g.text = (attr.data as any[]).map(a => String(a));
        if (isNumber(attr.data[0])) {
          g.z = [...attr.data];
        }
      }
      return [g];

    // linestrings
    } else if (geomattr.type === 'linestring') {
      const data: PlotData[] = [];
      geomattr.data.forEach((geom, index) => {
        const g = {
          type: 'scattermapbox',
          name: attr ? attr.name : geomattr.name,
          lon: [...geom.coordinates.map(c => c[0])],
          lat: [...geom.coordinates.map(c => c[1])],
          marker: {size: 12, color: 'cyan'},
          mode: 'lines',
          z: attr && isNumber(attr.data[index]) ? attr.data[index] : null,
          text: attr ? attr.data[index] : null
        } as PlotData;

        // push the trace
        data.push(g);
      });

      return data;
    }

    // this is the choropleth map
    else {
      return [
        {
          type: 'choroplethmapbox',
          z: attr ? [...attr.data] : [...(geomattr.data as any[]).map(f => 1)],
          locations: [...(geomattr.data as any[]).map((f, idx) => idx)],
          geojson: cloneDeep({
            type: 'FeatureCollection',
            features: [...(geomattr.data as any[]).map((f, idx) => {
            return {type: 'Feature', id: idx, geometry: {...f}};
          })]
          })
        } as any
      ];
    }
  }

  /**
   * The x-component changed. Go through all axes and set the new x-data
   */
  onXAxisChanged(): void {
    const xattr = this.allAttributes.find(a => a.name === this.selectedXAttribute);
    if (xattr) {
      // all charts
      if (this.selectedPlotType !== 'map') {
        const newAxes: PlotData[] = this.axes.map(a => ({...a, x: [...xattr.data]} as PlotData));
        this.axes = cloneDeep(newAxes);

        // map types
      } else {

      }
    }
  }

  onAddYAxis(): void {
    // get the attributes
    const attr = this.allAttributes.find(a => a.name === this.selectedYAttribute);
    const xattr = this.allAttributes.find(a => a.name === this.selectedXAttribute);

    if (this.selectedPlotType === 'map') {
      // create new axes and infer the indices
      const axes = this.convertMapLayer(xattr, attr);
      const currIdx = this.axes.length - 1;
      const idxs = (axes as any[]).map((a, i) => currIdx + (i + 1));
      this.axes = [...this.axes, ...axes];
      this.axesLabel.push({name: attr ? attr.name : xattr.name, color: 'cyan', idx: [...idxs]});


      console.log(this.axes);
    }

    // check that they exist
    else  if (attr && xattr) {
      const g = {
        x: [...xattr.data],
        y: [...attr.data],
        type: TYPEMAP[this.selectedPlotType],
        mode: MODEMAP[this.selectedPlotType],
        name: attr.name,
        marker: {color: 'cyan'}
      } as PlotData;
      this.axes = [...this.axes, g];
      this.axesLabel.push({name: attr.name, color: 'cyan', idx: [this.axes.length - 1]});
    }
  }

  onRemoveAxis(index: number): void {
    // find the labels
    const label = this.axesLabel[index];
    const newAxes = this.axes.filter((a, idx) => !label.idx.includes(idx));

    // set new
    this.axes = cloneDeep(newAxes);
    this.axesLabel.splice(index, 1);
  }

  private getAllowedPlotTypes(): void {
    this.plotTypes = [];
    const nNumeric = sum(this.allAttributes.map(a => a.type === 'numeric' ? 1 : 0));
    const nDates = sum(this.allAttributes.map(a => a.type === 'datetime' ? 1 : 0));
    const nText = sum(this.allAttributes.map(a => a.type === 'text' ? 1 : 0));
    const nGeom = sum(this.allAttributes.map(a => ['lonLat', 'linestring', 'polygon'].includes(a.type) ? 1 : 0));

    // for a line plot at least 2 numerics or 1 datetime and 1 numeric is needed
    if (nNumeric >= 2 || (nDates >= 1 && nNumeric >= 1) || (nText >= 1 && nNumeric >= 1)) {
      this.plotTypes.push('line');
      this.plotTypes.push('bar');
    }

    // for a scatter plot at least 2 numerics are needed
    if (nNumeric >= 2) {
      this.plotTypes.push('scatter');
    }

    // map types
    if (nGeom >= 1) {
      this.plotTypes.push('map');
    }

    this.loading = false;
  }

  private extractAttributes(): void {
    this.loading = true;
    this.attributeNames = [];
    this.allAttributes = [];

    // GET THE COLUMNS
    const firstRow = this.rawData[0];
    Object.keys(firstRow).forEach(key => {
      // add the attribute if missing
      if (!this.attributeNames.includes(key)) {
        // check if the type is valid
        const attrType = this.inferAttributeType(firstRow, key);
        if (attrType) {
          // add the attribute name
          this.attributeNames.push(key);
          // add the attribute
          const a = {
            name: key,
            type: attrType,
            data: []
          } as Attribute;
          this.allAttributes.push(cloneDeep(a));
        }
      }
    });

    // GET THE ROWS
    this.allAttributes.forEach(attr => {
      if (attr.type === 'datetime') {
        attr.data = [...this.rawData.map(row => new Date(row[attr.name]))];

      // convert the Geometry types
      } else if (['lonLat', 'linestring', 'polygon'].includes(attr.type)) {
        const geojson = [...this.rawData.map(row => wkt.parse(row[attr.name]))];
        console.log(geojson);
        attr.data = geojson;
      } else {
        attr.data = [...this.rawData.map(row => row[attr.name])];
      }
    });

    this.getAllowedPlotTypes();
  }

  private inferAttributeType(row: {[k: string]: any}, key: string): 'numeric' | 'text' | 'lonLat' | 'linestring' | 'polygon' | 'datetime' {
    const v = row[key];
    if (typeof(v) === 'number') {
        return 'numeric';

    } else if (typeof(v) === 'string') {
      // check the geometry types
      if (v.includes('POINT')) {
        return 'lonLat';
      } else if (v.includes('LINESTRING')) {
        return 'linestring';
      } else if (v.includes('POLYGON')) {
        return 'polygon';
      } else if (isValidDate(new Date(v))) {
        return 'datetime';
      }
      else {
        return 'text';
      }

    } else if (typeof(v) === 'object' && isValidDate(v)) {
      return 'datetime';
    } else {
      return null;
    }
  }

  onChangeMapStyle(newStyle: string): void {
    this.layout = {
      ...this.layout,
      mapbox: {...this.layout.mapbox, style: newStyle}
    } as Layout;
  }

}
