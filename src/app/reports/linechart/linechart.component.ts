import { Component } from '@angular/core';

@Component({
      selector: 'line-chart',
      templateUrl: './linechart.component.html' /* see HTML tab */
})
export class LineChartComponent {
      width = 1050;
      height = 400;
      type = 'line';
      dataFormat = 'json';
      dataSource = {
  "chart": {
    "caption": "Faults History",
    "yaxisname": "No. Of Faults",
    "subcaption": "[2005-2018]",
    "rotatelabels": "1",
    "setadaptiveymin": "1",
    "theme": "fusion",
    "paletteColors": "#F16C51",
    "baseFontColor": "#333333"
  },
  "data": [
    {
      "label": "2005",
      "value": "50"
    },
    {
      "label": "2006",
      "value": "30"
    },
    {
      "label": "2007",
      "value": "25"
    },
    {
      "label": "2008",
      "value": "92"
    },
    {
      "label": "2009",
      "value": "55"
    },
    {
      "label": "2010",
      "value": "69"
    },
    {
      "label": "2011",
      "value": "49"
    },
    {
      "label": "2012",
      "value": "20"
    },
    {
      "label": "2013",
      "value": "45"
    },
    {
      "label": "2014",
      "value": "30"
    },
    {
      "label": "2015",
      "value": "50"
    },
    {
      "label": "2016",
      "value": "60"
    },
    {
        "label": "2017",
        "value": "80"
    },
    {
        "label": "2018",
        "value": "95"
    }
  ]
}
}