import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }
    
  /*getData(){
     return this.http.get('https://teamtreehouse.com/roeroe.json')
         .map((response:Response) => response.json())
  }*/
    
    
    getData(){
     return this.http.get('https://jsonplaceholder.typicode.com/photos').map((response:Response) => response.json());
 }


}
