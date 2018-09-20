import { Injectable } from '@angular/core';


export interface Region {
  value: string;
  viewValue: string;
}

export interface Pipe {
  value: string;
  viewValue: string;
}
@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  url: string = "http://0.0.0.0:5000";

  
  regions: Region[] = [
    { value: 'Region1', viewValue: 'Region1' },
    { value: 'Region2', viewValue: 'Region2' }
    // {value: 'Region3', viewValue: 'Region3'}
  ];

  pipes: Pipe[] = [
  ];


  getPipeOptions(region: any) {
    if (region == "Region1") {
      this.pipes = [
        { value: 'Pipe1', viewValue: 'Pipe1' },
        { value: 'Pipe2', viewValue: 'Pipe2' }
        , { value: 'Pipe3', viewValue: 'Pipe3' }
      ];
    }
    if (region == "Region2") {
      this.pipes = [
        { value: 'Pipe1', viewValue: 'Pipe1' },
        { value: 'Pipe2', viewValue: 'Pipe2' }
      ];
    }
    return this.pipes;
  }

  constructor() { }
}
