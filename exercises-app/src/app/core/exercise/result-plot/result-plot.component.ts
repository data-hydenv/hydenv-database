import { Component, Input, OnInit } from '@angular/core';

import { cloneDeep, sum } from 'lodash';
import { Layout, PlotData } from 'plotly.js';

function isValidDate(date): boolean {
  return date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date);
}

export interface Attribute {
  name: string;
  type: 'numeric' | 'text' | 'wkt' | 'lon' | 'lat' | 'datetime';
  data: number[] | string[] | Date[];
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
  axes: PlotData[] = [];
  layout: Layout = {
    autosize: true,
    plot_bgcolor: '#1A2A32',
    paper_bgcolor: '#1A2A32'
  } as Layout;

  // selects
  plotTypes: ('line' | 'scatter')[] = [];
  selectedPlotType: 'line' | 'scatter';
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
    if (this.selectedPlotType === 'line') {
      this.xAxisAttributeOptions = this.allAttributes.filter(a => ['numeric', 'datetime'].includes(a.type)).map(a => a.name);
      this.yAxisAttributeOptions = this.allAttributes.filter(a => a.type === 'numeric').map(a => a.name);
      this.selectedXAttribute = null;
      this.selectedYAttribute = null;
    }

    // scatter
    if (this.selectedPlotType === 'scatter') {
      this.xAxisAttributeOptions = this.allAttributes.filter(a => a.type === 'numeric').map(a => a.name);
      this.yAxisAttributeOptions = this.allAttributes.filter(a => a.type === 'numeric').map(a => a.name);
      this.selectedXAttribute = null;
      this.selectedYAttribute = null;
    }
  }

  /**
   * The x-component changed. Go through all axes and set the new x-data
   */
  onXAxisChanged(): void {
    const xattr = this.allAttributes.find(a => a.name === this.selectedXAttribute);
    if (xattr) {
      const newAxes = this.axes.map(a => ({...a, x: [...xattr.data]} as PlotData));
      this.axes = cloneDeep(newAxes);
    }
  }

  onAddYAxis(): void {
    // get the attributes
    const attr = this.allAttributes.find(a => a.name === this.selectedYAttribute);
    const xattr = this.allAttributes.find(a => a.name === this.selectedXAttribute);

    // check that they exist
    if (attr && xattr) {
      const g = {
        x: [...xattr.data],
        y: [...attr.data],
        type: TYPEMAP[this.selectedPlotType],
        mode: MODEMAP[this.selectedPlotType],
        name: attr.name
      } as PlotData;
      this.axes = [...this.axes, g];
    }
  }

  onRemoveAxis(index: number): void {
    const newAxes = this.axes.filter((a, idx) => idx !== index);
    this.axes = cloneDeep(newAxes);
  }

  private getAllowedPlotTypes(): void {
    this.plotTypes = [];
    const nNumeric = sum(this.allAttributes.map(a => a.type === 'numeric' ? 1 : 0));
    const nDates = sum (this.allAttributes.map(a => a.type === 'datetime' ? 1 : 0));

    // for a line plot at least 2 numerics or 1 datetime and 1 numeric is needed
    if (nNumeric >= 2 || (nDates >= 1 && nNumeric >= 1)) {
      this.plotTypes.push('line');
    }

    // for a scatter plot at least 2 numerics are needed
    if (nNumeric >= 2) {
      this.plotTypes.push('scatter');
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
      } else {
        attr.data = [...this.rawData.map(row => row[attr.name])];
      }
    });

    this.getAllowedPlotTypes();
  }

  private inferAttributeType(row: {[k: string]: any}, key: string): 'numeric' | 'text' | 'wkt' | 'lon' | 'lat' |'datetime' {
    const v = row[key];
    if (typeof(v) === 'number') {
      if (key.toLowerCase() === 'lon' || key.toLowerCase() === 'longitude') {
        return 'lon';
      } else if (key.toLowerCase() === 'lat' || key.toLowerCase() === 'latitude') {
        return 'lat';
      } else {
        return 'numeric';
      }

    } else if (typeof(v) === 'string') {
      if (key.toLowerCase() === 'wkt') {
        return 'wkt';
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

}
