import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class SwitchPreviewService {
flag : boolean = false;
  constructor() { }
isAuthenticated(){
  this.flag = !this.flag;
} 
private messageSource1 = new BehaviorSubject('default message');
private messageSource2 = new BehaviorSubject('default message');
private messageSource3 = new BehaviorSubject(false);
region = this.messageSource1.asObservable();
pipe = this.messageSource2.asObservable();
resourceload= this.messageSource3.asObservable();
changeMessage(region: string, pipe: string,resourceload:boolean) {
this.messageSource1.next(region);
this.messageSource2.next(pipe);
this.messageSource3.next(resourceload);
}

showspinner(resourceload:boolean) {

  this.messageSource3.next(resourceload);
  }
}   