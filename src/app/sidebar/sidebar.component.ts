import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import  {  SwitchPreviewService  }  from  '../dashboard/switch-preview.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  resourceload:any;
  private _mobileQueryListner: () => void;

  constructor( changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,public  data:  SwitchPreviewService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListner = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListner);
   }

  ngOnInit() {
    this.data.resourceload.subscribe(message  =>  this.resourceload  =  message)
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListner);

  }

}
