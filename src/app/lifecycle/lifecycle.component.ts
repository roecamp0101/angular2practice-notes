import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, ViewChild } from '@angular/core';


@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      lifecycle Works!
    </p>
    
    <button (click)="test = 'singers yeeeaah!' ">Please Click Me</button>
    <p>{{test}}</p>

 <button (click)="bindable = 9000 ">Please Click Me</button>
    <p>{{bindable}}</p>

<br/><br/><br/>

<p #yeah>{{yeahman}}</p> <!--local varible reference-->
<p>{{yeah.textContent}}</p>

<br/><br/><br/>

<app-doubleds></app-doubleds>

<br/><br/><br/>

<div highlight >Please hightlight me</div>

<!--properties added to event listeners through property binding -->
<!--<div highlight [orange]="'orange'" [bluey]="'blue'">Please hightlight me</div>-->
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  constructor() { }
    
    test = 4000;
    @Input() bindable;
    
    yeahman = 'ok';
    @ViewChild('yeah') //view local variable in class component
    yeah: HTMLElement;

    ngOnChanges(){
        this.log('OnChanges');
    }
    ngOnInit() {
        this.log('OnInit');

    }
    ngDoCheck(){
        this.log('DoCheck');

    }
    ngAfterContentInit(){
        this.log('AfterContentInit');

    } 
    ngAfterContentChecked(){
        this.log('AfterContentChecked');
    } 
    ngAfterViewInit(){
        this.log('AfterViewinit');
        console.info(this.yeah)
    } 
    ngAfterViewChecked(){
        this.log('AfterViewChecked')
    }
    ngOnDestroy(){
        this.log('OnDestroy')
    }
    
    private log(hook:string){
        console.log(hook);
    }
    

}
