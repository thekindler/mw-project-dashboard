import { Component, OnInit } from '@angular/core';

export interface ImageLoc {
  imageId: number;
  location: string;
}



@Component({
  selector: 'app-cracks',
  templateUrl: './cracks.component.html',
  styleUrls: ['./cracks.component.css']
})
export class CracksComponent implements OnInit {

  element: HTMLElement;
  input_selected: boolean = false;

  output_locations: string[]=[
     '../../../assets/images/output_images/crack1.JPG' ,
     '../../../assets/images/output_images/crack2.JPG',
    '../../../assets/images/output_images/crack3.JPG' ,
    '../../../assets/images/output_images/crack4.JPG' ,
     '../../../assets/images/output_images/non_crack1.JPG' 
  ]
  current_selection_output:string;

  cracks_images: ImageLoc[] = [
    { imageId: 0, location: '../../../assets/images/input_images/crack1.JPG' },
    { imageId: 1, location: '../../../assets/images/input_images/crack2.JPG' },
    { imageId: 2, location: '../../../assets/images/input_images/crack3.JPG' },
    { imageId: 3, location: '../../../assets/images/input_images/crack4.JPG' },
    { imageId: 4, location: '../../../assets/images/input_images/non_crack1.JPG' }
  ]

  constructor() {
    //  this.current_selection_output='../../../assets/images/output_images/crack1.JPG'
   }

  ngOnInit() {
    this.element = document.getElementById("input_image") as HTMLElement;
  }

  showProcessesOutput(imageId:number) {
    this.input_selected=true;
    this.current_selection_output=this.output_locations[imageId]
    console.log(this.current_selection_output)
  }
}
