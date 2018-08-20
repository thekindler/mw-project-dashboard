import { Component, OnInit } from '@angular/core';
import {DashboardComponent} from '../dashboard.component';
import { SwitchPreviewService } from '../switch-preview.service';
export interface Region {
  value: string;
  viewValue: string;
}

export interface Pipe {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private myservice: SwitchPreviewService) {}
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
  onSubmit(){
    this.resourcesLoaded = true;
    this.myservice.changeMessage(this.regionSelected,this.pipeSelected,true); 
    setTimeout(()=>{ 
      this.myservice.isAuthenticated();
      
      this.myservice.changeMessage(this.regionSelected,this.pipeSelected,false); 
    } ,5000);  
  }
  ngOnInit() {
  }
}