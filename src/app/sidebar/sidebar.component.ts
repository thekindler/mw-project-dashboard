import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  private _mobileQueryListner: () => void;

  constructor( changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListner = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListner);
   }

  ngOnInit() {

  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListner);
  }

}
