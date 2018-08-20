import { Component, OnInit, Input} from '@angular/core';
import  {  SwitchPreviewService  }  from  '../../switch-preview.service';

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
  count:number;
}

// const ELEMENT_DATA: PACPData[] = [
//   {
//     pipelineId: 'P875',
//     distance: 2.0,
//     start: 2.0,
//     end: 3.0,
//     isContinuous: true,
//     defectName: 'Crack',
//     subDefectName: 'LR',
//     inspectionRating: '3',
//     quickRating: '3',
//     pipeRating: '102031',
//     severity: 'medium'
//   },

// ];

const ELEMENT_DATA: any = {'Region1Pipe1':[{
  'pipelineId': 'R1P1',
  'distance': 2.0,
  'start': 2.0,
  'end': 3.0,
  'isContinuous': true,
  'defectName': 'Tree Root',
  'subDefectName': 'LR',
  'inspectionRating': '3',
  'quickRating': '1020314050',
  'pipeRating': '3',
  'severity': '3',
  'count':1
}],
'Region1Pipe2':[{
  'pipelineId': 'R1P2',
  'distance': 3.0,
  'start': 2.0,
  'end': 5.0,
  'isContinuous': true,
  'defectName': 'Crack',
  'subDefectName': 'LR',
  'inspectionRating': '3',
  'quickRating': '1020314050',
  'pipeRating': '3',
  'severity': '3',
  'count':1
}],
'Region2Pipe1':[{
  'pipelineId': 'R1P3',
  'distance': 2.0,
  'start': 2.0,
  'end': 3.0,
  'isContinuous': true,
  'defectName': 'Blockage',
  'subDefectName': 'LR',
  'inspectionRating': '3',
  'quickRating': '1020304150',
  'pipeRating': '4',
  'severity': '4',
  'count':1
}],
'Region2Pipe2':[{
  'pipelineId': 'R1P4',
  'distance': 2.0,
  'start': 2.0,
  'end': 4.0,
  'isContinuous': true,
  'defectName': 'Tree root',
  'subDefectName': 'LR',
  'inspectionRating': '3',
  'quickRating': '1021304050',
  'pipeRating': '2',
  'severity': '2',
  'count':1
}],
} ;



@Component({
  selector: 'app-pacpdialog',
  templateUrl: './pacpdialog.component.html',
  styleUrls: ['./pacpdialog.component.css']
})

export class PACPDialogComponent implements OnInit {
  region: any;
  pipe: any;
  datasource:  any;
  insprate:any;
  piperate:any;
  

//   count: any ={'Region1Pipe1':{'treeroot':1,'blockage':0,'crack':0},
//   'Region1Pipe2':{'treeroot':1,'blockage':0,'crack':0},
//   'Region2Pipe1':{'treeroot':0,'blockage':1,'crack':0},
//   'Region2Pipe2':{'treeroot':0,'blockage':0,'crack':1}
// };
 
  constructor(public  data:  SwitchPreviewService) { }

  ngOnInit() {
    this.data.region.subscribe(message  =>  this.region  =  message);
    this.data.pipe.subscribe(message  =>  this.pipe  =  message)
    // for(let i=0;i<ELEMENT_DATA[this.region+this.pipe].length;i++)
    // {
    //  sum+= ELEMENT_DATA[this.region+this.pipe][i]['severity']
    // }
    // ELEMENT_DATA[this.region+this.pipe][]['inspectionRating']+=

    this.datasource = ELEMENT_DATA[this.region+this.pipe];
  }
  
    displayedColumns: string[] = ['pipelineId', 'distance', 'start', 'end', 'isContinuous', 'defectName', 'subDefectName', 'inspectionRating', 'quickRating', 'pipeRating', 'severity'];

}