import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';

import {HttpService} from './http.service';

@Component({
    selector: 'app-http',
    templateUrl: './http.component.html',
    styleUrls: ['./http.component.css'],
    providers: [HttpService]

})

export class HttpComponent implements OnInit {

  constructor(private httpService: HttpService) {}

  items: any[];
  data: any[];

  ngOnInit() {
    this.httpService.getData().subscribe(

      (data: any) => {

        console.info(data);

      }

    );

    //For putting server info on dom   
    this.httpService.getData().subscribe(
      (data: any) => {
        const myArray = [];
        for (let key in data) {
          myArray.push(data[key]);
        }
        this.items = myArray;
      }

    );



  }


}
