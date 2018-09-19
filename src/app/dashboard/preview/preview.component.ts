import  {  Component,  OnInit, Inject  }  from  '@angular/core';
import  {  SwitchPreviewService  }  from  '../switch-preview.service';
import { HttpClient } from "@angular/common/http";
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
  inputVideo: HTMLElement ;
  outputVideo: HTMLElement ;
  count: any ={'Region1Pipe1':{'treeroot':1,'blockage':0,'crack':0},
  'Region1Pipe2':{'treeroot':0,'blockage':0,'crack':1},
  'Region2Pipe1':{'treeroot':0,'blockage':1,'crack':0},
  'Region2Pipe2':{'treeroot':1,'blockage':0,'crack':0},
  'Region1Pipe3':{'treeroot':1,'blockage':0,'crack':1}
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
//     ,{value: 'Pipe3', viewValue: 'Pipe3'}
  ];
  region:  any;
  pipe:  any;
  constructor(public  data:  SwitchPreviewService, private dialog: MatDialog,private httpClient:HttpClient)  {  }

  ngOnInit()  {
    this.data.region.subscribe(message  =>  this.region  =  message)
    this.data.pipe.subscribe(message  =>  this.pipe  =  message)
    this.inputVideo = document.getElementById("inputVideo") as HTMLElement ;
    this.outputVideo = document.getElementById("outputVideo") as HTMLElement ;

  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(PACPDialogComponent, dialogConfig);
  }
  
  onSubmit(){
   this.data.showspinner(true)
   this.httpClient.post("http://54.174.95.238:5000/process_video",
    {
        "region": this.regionSelected,
        "pipe": this.pipeSelected
    })
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.data.changeMessage(this.regionSelected,this.pipeSelected,false);
            this.inputVideo.setAttribute('src',"http://54.174.95.238:5000/input_video_feed");
            this.outputVideo.setAttribute('src',"http://54.174.95.238:5000/output_video_feed");
            console.log(this.region)
        },
        error => {
            console.log("Error", error);
        }
    );   
  }
}
