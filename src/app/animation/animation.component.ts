import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
    selector: 'app-animation',
    templateUrl: './animation.component.html',
    styleUrls: ['./animation.component.css'],
    animations: [
        
    trigger('divystate', [
      state('normal', style({
        backgroundColor: 'green',
        transform: 'translateX(0)'
      })),
      state('highlighted',   style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),
        transition('normal => highlighted', animate(300)),
        transition('highlighted => normal', animate(800))
        //transition('highlighted <=> normal', animate(800)) //to transition in both directions for the same timing
    
    ]),
    
     trigger('wildstyle', [
      state('normal', style({
        backgroundColor: 'green',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted',   style({
        backgroundColor: 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken',   style({
        backgroundColor: '#000080',
        transform: 'translateX(0) scale(0.5)'
      })),
        transition('normal => highlighted', animate(100)),
        transition('highlighted => normal', animate(500)),
        /*transition('shrunken <=> *', animate(800, style({
            //borderRadius: '100px'
        })
         )) //is the wildcard meaning any state. You can animate in between in a different way.*/
         
         transition('shrunken <=> *', [
             style({
                 backgroundColor: 'purple'
             }),
               animate(1000, style({
                   borderRadius: '100px'
               })),
             animate(500)
         ])
    ]),
        
  ]

})
export class AnimationComponent implements OnInit {

    state = 'normal';
    wildstame = 'normal';
    
    onAnimate(){
        
        this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
        this.wildstame == 'normal' ? this.wildstame = 'highlighted' : this.wildstame = 'normal';
    }
    
    onShrink(){
        
        this.wildstame = 'shrunken';
    }
    
    groceries = ['met', 'wh', 'cearal'];
    constructor() { }

    ngOnInit() {
    }

}
