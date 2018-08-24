import  {  Component,  OnInit, Inject  }  from  '@angular/core';
import  {  SwitchPreviewService  }  from  '../switch-preview.service';

import {
  MatDialog,
  MatDialogConfig
} from "@angular/material";

import { PACPDialogComponent } from './pacpdialog/pacpdialog.component';

export interface Region {
  value: string;
  viewValue: string;
}
export interface Region {
  value: string;
  viewValue: string;
}

export interface Pipe {
  value: string;
  viewValue: string;
}



@Component({
  selector:  'app-preview',
  templateUrl:  './preview1.component.html',
  styleUrls:  ['./preview1.component.css']
})
export  class  PreviewComponent  implements  OnInit  {
  count: any ={'Region1Pipe1':{'treeroot':1,'blockage':0,'crack':0},
  'Region1Pipe2':{'treeroot':0,'blockage':0,'crack':1},
  'Region2Pipe1':{'treeroot':0,'blockage':1,'crack':0},
  'Region2Pipe2':{'treeroot':1,'blockage':0,'crack':0}
};

resourcesLoaded:boolean = false;
  regionSelected: any =''; 
  pipeSelected: any =''; 

  regions: Region[] = [
    {value: 'Region1', viewValue: 'Region1'},
    {value: 'Region2', viewValue: 'Region2'}
    // {value: 'Region3', viewValue: 'Region3'}
  ];

  pipes: Pipe[] = [
    {value: 'Pipe1', viewValue: 'Pipe1'},
    {value: 'Pipe2', viewValue: 'Pipe2'}
    // {value: 'Pipe3', viewValue: 'Pipe3'}
  ];
  region:  String;
  pipe:  String;
  constructor(public  data:  SwitchPreviewService, private dialog: MatDialog)  {  }

  ngOnInit()  {
    this.data.region.subscribe(message  =>  this.region  =  message)
    this.data.pipe.subscribe(message  =>  this.pipe  =  message)


  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(PACPDialogComponent, dialogConfig);
  }
  
  onSubmit(){

   this.data.showspinner(true)
    setTimeout(()=>{    
      this.data.changeMessage(this.regionSelected,this.pipeSelected,false);
      console.log(this.region)
    } ,5000);   
  }
}