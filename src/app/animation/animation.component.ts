import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';

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
         
        transition('normal => highlighted', animate(100)),//transition allows us to animate between states
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
             animate(500) //change styles between animations
         ])
    ]),
        
     trigger('keyanimations', [
      state('normal', style({
        backgroundColor: 'orange',
        transform: 'translateX(0) scale(1)'
      })),
         
        transition('void => *',  [
            
            animate(3000, keyframes([
                
                style({
                    transform: 'translateX(110px)',
                    backgroundColor: 'pink',
                    offset: 0 //tell at which point animation should operate
                }),
                style({
                    transform: 'translateX(50px)',
                    backgroundColor: 'green',
                    offset: 0.5
                }),
                style({
                    transform: 'translateX(20px)',
                    backgroundColor: 'black',
                    offset: 0.8
                }),
                style({
                    transform: 'translateX(0px)',
                    backgroundColor: 'grey',
                    offset: 1
                })
            ]))
                                   
                                ]),//keyframe animations

    ])
        
  ]

})
export class AnimationComponent implements OnInit {

    /*setting the state to normal*/
    state = 'normal';
    wildstame = 'normal';
    
    
    onAnimate(){
        //allows us to transition between states
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
