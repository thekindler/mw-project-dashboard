import {Component} from '@angular/core';
 
@Component({
  selector: 'fusion-charts',
  templateUrl: './fusioncharts.component.html'
})
export class FusionChartsComponent {
  dataSource: Object;
  title: string;
 
  constructor() {
 
    this.dataSource = {
        "chart": {
           "caption": "Regionwise fault description",
           "showValues": "1",
           "showPercentInTooltip": "0",
           "numberPrefix": "$",
           "enableMultiSlicing": "1",
           "theme": "fusion"
        },
        "data": [{
           "label": "Tree Root Intrussion",
           "value": "300000"
        }, {
           "label": "Blockage",
           "value": "230000"
        }, {
           "label": "Carcks",
           "value": "180000"
        }]
     };
  }
}