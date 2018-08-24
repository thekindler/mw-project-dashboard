import { Component } from '@angular/core';

@Component({
      selector: 'donut-chart',
      templateUrl: './donutchart.component.html' /* see HTML tab */
})
export class DonutChartComponent {
  width = 500;
  height = 400;
  type = 'doughnut2d';
  dataFormat = 'json';
  dataSource = {
"chart": {
"caption": "Regionwise Severity",
"subcaption": "",
"showpercentvalues": "1",
"defaultcenterlabel": "Severity ",
"aligncaptionwithcanvas": "0",
"captionpadding": "0",
"decimals": "1",
"plottooltext": "<b>$label</b> is <b>$percentValue</b> severe",
"centerlabel": "# Severe Faults: $value",
"palettecolors":"00B28F,DF9926,F16C51",
"theme": "fusion"
},
"data": [
{
  "label": "Region 1",
  "value": "10",
},
{
  "label": "Region 2",
  "value": "5"
},
{
  "label": "Region 3",
  "value": "3"
}
]
}
}