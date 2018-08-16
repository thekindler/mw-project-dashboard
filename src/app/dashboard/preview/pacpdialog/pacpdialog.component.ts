import { Component, OnInit } from '@angular/core';


export interface PACPData {
  pipelineId: string;
  distance: number;
  start: number;
  end: number;
  isContinuous: boolean;
  defectName: string;
  subDefectName: string;
  inspectionRating: string;
  quickRating: string;
  pipeRating: string;
  severity: string;
}

const ELEMENT_DATA: PACPData[] = [
  {
    pipelineId: 'P875',
    distance: 2.0,
    start: 2.0,
    end: 3.0,
    isContinuous: true,
    defectName: 'Crack',
    subDefectName: 'LR',
    inspectionRating: '3',
    quickRating: '3',
    pipeRating: '102031',
    severity: 'medium'
  }
];

@Component({
  selector: 'app-pacpdialog',
  templateUrl: './pacpdialog.component.html',
  styleUrls: ['./pacpdialog.component.css']
})

export class PACPDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    displayedColumns: string[] = ['pipelineId', 'distance', 'start', 'end', 'isContinuous', 'defectName', 'subDefectName', 'inspectionRating', 'quickRating', 'pipeRating', 'severity'];
  dataSource = ELEMENT_DATA;
}