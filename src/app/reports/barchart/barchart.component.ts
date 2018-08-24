import { Component, OnInit } from '@angular/core';
export interface Region {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})


export class BarchartComponent {
 regionbar:any="Region1";
  width = 500;
      height = 400;
      type = 'column2d';
      dataFormat = 'json';


  regions: Region[] = [
    {value: 'Region1', viewValue: 'Region1'},
    {value: 'Region2', viewValue: 'Region2'}
    // {value: 'Region3', viewValue: 'Region3'}
  ];
  fault: any = {
    Region1:{Treeroot:15,Cracks:25,Blockage:10},
    Region2:{Treeroot:17,Cracks:15,Blockage:13}

  };
  
  ngOnInit() {
  }
  public onChangedrop(deviceValue:any) {
 
    console.log(this.fault[this.regionbar]);
    
      
    this.dataSource={
      "chart": {
        "caption": "Region wise faults",
        "subcaption": this.regionbar,
        "xaxisname": "Faults types",
        "yaxisname": "Faults",
        "numbersuffix": "",
        "theme": "fusion"
        
      },
      "data": [
        {
          "label": "Tree Roots",
          "value": this.fault[this.regionbar]["Treeroot"],
          "color": "#DF9926"
        },
        {
          "label": "Cracks",
          "value": this.fault[this.regionbar]["Cracks"],
          "color": "#963596"
        }
        ,
        {
          "label": "Blockage",
          "value": this.fault[this.regionbar]["Blockage"],
          "color": "#00B28F"
        }
      ]   
    }
}

      dataSource = {
  "chart": {
    "caption": "Region wise faults",
    "subcaption": this.regionbar,
    "xaxisname": "Faults types",
    "yaxisname": "Faults",
    "numbersuffix": "",
    "theme": "fusion"
  },
  "data": [
    {
      "label": "Tree Roots",
      "value":  this.fault[this.regionbar]["Treeroot"],
      "color": "#DF9926"
    },
    {
      "label": "Cracks",
      "value":  this.fault[this.regionbar]["Cracks"],
      "color": "#963596"

    }
    ,
    {
      "label": "Blockage",
      "value":  this.fault[this.regionbar]["Blockage"],
      "color": "#00B28F"
    }
  ]


}
}
