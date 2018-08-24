import { Component } from '@angular/core';
import { SwitchPreviewService } from '../dashboard/switch-preview.service';

@Component({
  selector: 'fusion-charts',
  templateUrl: './fusioncharts.component.html'
})
export class FusionChartsComponent {
  region: any;
  dataSource: Object;
  title: string;
  count: any;
  constructor(public data: SwitchPreviewService) {
    this.count = {
      'Region1': { 'treeroot': 1, 'blockage': 0, 'crack': 1 },
      'Region2': { 'treeroot': 1, 'blockage': 1, 'crack': 0 }
    }

    this.data.region.subscribe(message => {
      this.region = message; 
      this.ngOnInit();
    });
;

  }
  ngOnInit() {
    this.dataSource = {
      "chart": {
        "caption": "Regionwise fault description: " + this.region,
        "showValues": "1",
        "showPercentInTooltip": "0",
        "numberPrefix": "",
        "enableMultiSlicing": "1",
        "theme": "fusion",
        "palettecolors":"00B28F,DF9926,F16C51",
      },
      "data": [{
        "label": "Tree Root Intrussion",
        "value": this.count[this.region]['treeroot']
      }, {
        "label": "Blockage",
        "value": this.count[this.region]['blockage']
      }, {
        "label": "Cracks",
        "value": this.count[this.region]['crack']
      }]
    };
  }
}