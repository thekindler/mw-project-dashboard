import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  date = new FormControl(new Date());
  constructor() { }

  ngOnInit() {
  }

}
