import  {  Component,  OnInit  }  from  '@angular/core';
import  {  SwitchPreviewService  }  from  '../switch-preview.service';



export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface Region {
  value: string;
  viewValue: string;
}

@Component({
  selector:  'app-preview',
  templateUrl:  './preview.component.html',
  styleUrls:  ['./preview.component.css']
})
export  class  PreviewComponent  implements  OnInit  {
  inputPipe:String="Blockage_Detection_1"
  output:String="Blockage_Detection_1"
  inputMap:String="Blockage_Detection_1_map"
  region:  String;
  pipe:  String;
  constructor(public  data:  SwitchPreviewService)  {  }

  ngOnInit()  {
    this.data.region.subscribe(message  =>  this.region  =  message)
    this.data.pipe.subscribe(message  =>  this.pipe  =  message)
  }

  regions: Region[] = [
    {value: 'steak-0', viewValue: 'Region 1'},
    {value: 'pizza-1', viewValue: 'Region 2'},
    {value: 'tacos-2', viewValue: 'Region 3'}
  ];

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Five', cols: 1, rows: 1, color: '#DDBDF1'},
  ];
}