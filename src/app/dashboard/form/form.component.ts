import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard.component';
import { SwitchPreviewService } from '../switch-preview.service';
import { HttpClient } from "@angular/common/http";
import { GlobalService } from './../../services/global.service';
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
  constructor(private myservice: SwitchPreviewService, private httpClient: HttpClient, public global: GlobalService) { }
  resourcesLoaded: boolean = false;
  regionSelected: any = '';
  pipeSelected: any = '';
  regions: Region[] = [];
  pipes: Pipe[] = [];
  onSubmit() {
    this.resourcesLoaded = true;

    this.myservice.changeMessage(this.regionSelected, this.pipeSelected, true);
    this.httpClient.post(this.global.url + "/process_video",
      {
        "region": this.regionSelected,
        "pipe": this.pipeSelected
      })
      .subscribe(
        data => {
          console.log("POST Request is successful", data);
          this.myservice.isAuthenticated();

          this.myservice.changeMessage(this.regionSelected, this.pipeSelected, false);
        },
        error => {
          console.log("Error", error);
        }
      );

  }

  ngOnInit() {
    this.regions = this.global.regions

  }

  setpipes(reg: any) {
    this.pipes = this.global.getPipeOptions(reg)
  }


}