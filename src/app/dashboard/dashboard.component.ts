import { Component, OnInit } from '@angular/core';
import { SwitchPreviewService } from './switch-preview.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent{
  constructor(public myservice: SwitchPreviewService) {
  }
}