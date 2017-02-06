import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-other',
  templateUrl: './other.component.html' ,
  styles: []
})
export class OtherComponent implements OnInit {

  value = '';
  listen = 'she got the plug';
    
  pleaseClick(value){
      alert(value)
  }

  constructor() { }

  ngOnInit(){}

}
