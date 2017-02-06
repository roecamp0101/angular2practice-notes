import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-coolin',
  template: `
    <p>
      coolin Works!
    </p>
  {{listen}}
  {{anytingcanhappen}}
 <br/><br/><br/>
    <button type="button" class="btn btn-primary" (click)="btnClick()">Hey I'm a button click on me</button>

     <br/><br/><br/>
    <button type="button" class="btn btn-danger" (click)="pleaseClick()">Hey I'm a button click on me</button>

  <input type="text"   [(ngModel)]="cida" /> <span>{{cida}} </span>
  `,
  styles: []
})
export class CoolinComponent {

    @Input() listen; //binding parent component information
    @Input() anytingcanhappen; //binding local information
     
    btnClick(){
        alert('woow I was clicked');
    };
     
     
    @Output() clicked = new EventEmitter();
     
    pleaseClick(){
        this.clicked.emit('It works');
    };
     
     
    clickmeformore = new EventEmitter();
     

}
