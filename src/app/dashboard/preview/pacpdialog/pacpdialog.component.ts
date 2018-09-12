import { Component, OnInit, Input} from '@angular/core';
import  {  SwitchPreviewService  }  from  '../../switch-preview.service';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  

export interface PACPData {
  distance: number;
  videoRef: number;
  descriptor: string;
  modifier: number;
  continuousDefect: string;
  sML: string;
  first: number;
  second: number;
  percent: number;
  joint: boolean;
  at: string;
  to:number;
  imageRef: string;
  Remarks: string;
  
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
  'distance': 457.9,
  'videoRef': 10,
  'descriptor': 'LR',
  'modifier': 1,
  'continuousDefect':'Truly Continuous' ,
    'sML': 'S',
  'first': 1.3,
  'second': 4.5,
  'percent': 40,
  'joint': false,
  'at': 11,
  'to':3,
  'imageRef': 'NA',
  'Remarks': 'Tree Root'
}],
'Region1Pipe2':[{
  'distance': 857.9,
  'videoRef': 80,
  'descriptor': 'LR',
  'modifier': 1,
  'continuousDefect':'Repeating Continuous' ,
    'sML': 'M',
  'first': 3.3,
  'second': 8.5,
  'percent': 60,
  'joint': false,
  'at': 1,
  'to':4,
  'imageRef': 'NA',
  'Remarks': 'crack'
}],
'Region2Pipe1':[{
  'distance': 150,
  'videoRef': 60,
  'descriptor': 'LR',
  'modifier': 1,
  'continuousDefect':'Truly Continuous' ,
    'sML': 'S',
  'first': 4.3,
  'second': 9.5,
  'percent': 20,
  'joint': false,
  'at': 11,
  'to':4,
  'imageRef': 'NA',
  'Remarks': 'blockage'
}],
'Region2Pipe2':[{
  'distance':234.5,
  'videoRef': 95,
  'descriptor': 'LR',
  'modifier': 1,
  'continuousDefect':'Truly Continuous' ,
    'sML': 'L',
  'first': 2.3,
  'second': 4.5,
  'percent': 30,
  'joint': false,
  'at': 11,
  'to':3,
  'imageRef': 'NA',
  'Remarks': 'Tree Root'
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

    displayedColumns: string[] = ['distance', 'videoRef', 'descriptor', 'modifier', 'continuousDefect', 'sML', 'first', 'second', 'percent', 'joint', 'at','to','imageRef','Remarks'];

    downloadReport(event: any){
      event.preventDefault();
      var data = document.getElementById('PACPReportTable');  
      html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 25;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.setFontSize(16)
      pdf.text(90, 10, 'PACP REPORT');
      pdf.setFontSize(12)
      pdf.text(5, 20, 'RegionID: ' + this.region);
      pdf.setFontSize(12)
      pdf.text(45,20, 'PipeID: '+ this.pipe);  
      pdf.setFontSize(11)
      pdf.text(175, 100, 'Signature');  
      pdf.save('PACPReport.pdf'); // Generated PDF   
    }); 
    }    

}