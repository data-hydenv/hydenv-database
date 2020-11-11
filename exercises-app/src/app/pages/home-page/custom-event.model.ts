import { PlotMouseEvent } from 'plotly.js';

export interface CustomEvent {
  activeExample: string;
  points?: PlotMouseEvent['points'];
  feature?: any;
  reference?: any[];
}
