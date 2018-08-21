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
  fault: any = {Region1:'125',Region2:'362'
    // {value: 'Region3', viewValue: 'Region3'}
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
          "value": this.fault[this.regionbar][0]
        },
        {
          "label": "Cracks",
          "value": this.fault[this.regionbar][1]
        }
        ,
        {
          "label": "Blockage",
          "value": this.fault[this.regionbar][2]
        }
        // ,
        // {
        //   "label": "Iran",
        //   "value": "140"
        // },
        // {
        //   "label": "Russia",
        //   "value": "115"
        // },
        // {
        //   "label": "UAE",
        //   "value": "100"
        // },
        // {
        //   "label": "US",
        //   "value": "30"
        // },
        // {
        //   "label": "China",
        //   "value": "30"
        // }
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
      "value":  this.fault[this.regionbar][0]
    },
    {
      "label": "Cracks",
      "value":  this.fault[this.regionbar][1]
    }
    ,
    {
      "label": "Blockage",
      "value":  this.fault[this.regionbar][2]
    }
    // ,
    // {
    //   "label": "Iran",
    //   "value": "140"
    // },
    // {
    //   "label": "Russia",
    //   "value": "115"
    // },
    // {
    //   "label": "UAE",
    //   "value": "100"
    // },
    // {
    //   "label": "US",
    //   "value": "30"
    // },
    // {
    //   "label": "China",
    //   "value": "30"
    // }
  ]


}
}
