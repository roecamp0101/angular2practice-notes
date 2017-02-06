import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';


@Component({
  selector: 'app-singer',
  template: `
    <p>
      singer Works!
    </p>

    <ng-content></ng-content>
  `,
  styles: []
})
export class SingerComponent implements OnInit, AfterContentInit {

    constructor() { }

    ngOnInit() {
    }
    
    @ContentChild('yooz')
    yooz: HTMLElement;

    ngAfterContentInit(){
        console.info(this.yooz)
    }
    


}
