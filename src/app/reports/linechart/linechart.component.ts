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
      "value": "5"
    },
    {
      "label": "2006",
      "value": "6"
    },
    {
      "label": "2007",
      "value": "2"
    },
    {
      "label": "2008",
      "value": "9"
    },
    {
      "label": "2009",
      "value": "4"
    },
    {
      "label": "2010",
      "value": "10"
    },
    {
      "label": "2011",
      "value": "15"
    },
    {
      "label": "2012",
      "value": "3"
    },
    {
      "label": "2013",
      "value": "13"
    },
    {
      "label": "2014",
      "value": "7"
    },
    {
      "label": "2015",
      "value": "8"
    },
    {
      "label": "2016",
      "value": "6"
    },
    {
        "label": "2017",
        "value": "11"
    },
    {
        "label": "2018",
        "value": "10"
    }
  ]
}
}