import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ImageService {
  constructor(private http: HttpClient) { }

  getImage(imageUrl: string) {
      console.log(imageUrl);
    //   var test = this.http.get(imageUrl, { responseType: 'blob' });
    var test=this.http.get(imageUrl);
    return this.http.get(imageUrl);
  }
}