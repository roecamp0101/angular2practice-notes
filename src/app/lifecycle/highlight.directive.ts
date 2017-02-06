import { Directive,  ElementRef, HostListener, Input, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
    
    /*All of this is for custom directives*/
    
    backgroundColor:string;

    @HostListener('mouseenter') mouseover() { //adding event listener to element reference
        this.backgroundColor = 'red';
        //this.backgroundColor = this.orange;
    };

    @HostListener('mouseleave') mouseleave() { //adding event listener to element reference
        this.backgroundColor = 'green';
        //this.backgroundColor = this.bluey;
    };
     
    @HostBinding('style.backgroundColor') get changeColor(){//Binding styles to the event listeners.
        return this.backgroundColor;
    };
     
    //getter and setter. getters are only read only setters are able to read and set element styles.

    
    //How to pass the Event Object to the Method handling the event
    /*@HostListener('click', ['$event']){
        onClick(event) {
            console.log("Event Target" + event.target);
        }
    }*/

    //set event listeners through databinding
    /*@Input() orange:string;
    @Input() bluey:string;*/
     
    constructor(private elementRef: ElementRef, renderer: Renderer) { 
    
        //this.elementRef.nativeElement.style.backgroundColor = 'red'; //element ref to set background color
        //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'red'); // better way to set background color.
    
    }
    
    




}
