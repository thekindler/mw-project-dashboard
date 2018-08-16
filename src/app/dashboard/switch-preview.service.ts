import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class SwitchPreviewService {
flag : boolean = true;
  constructor() { }
isAuthenticated(){
  this.flag = !this.flag;
} 
private messageSource1 = new BehaviorSubject('default message');
private messageSource2 = new BehaviorSubject('default message');
region = this.messageSource1.asObservable();
pipe = this.messageSource2.asObservable();
changeMessage(region: string, pipe: string) {
this.messageSource1.next(region);
this.messageSource2.next(pipe);
}
} 