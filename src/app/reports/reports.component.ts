import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  date = new FormControl(new Date());
  datePrevious = new Date();
  prevDate: any;
  constructor() { 
    this.datePrevious.setFullYear(this.datePrevious.getFullYear() - 1);
    this.prevDate = new FormControl(this.datePrevious);
  }

  ngOnInit() {
  }

}
