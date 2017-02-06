import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doubleds',
  templateUrl: './doubleds.component.html',
  styleUrls: ['./doubleds.component.css']
})
export class DoubleDsComponent implements OnInit {

    summize: string[] = ['singer', 'whats good', 'uchllin'];
    
    blanking: boolean = true;
    
    
    constructor() { }

    ngOnInit() {
    }
    
    
    private chillinz:boolean = true;
    
    really(){
        this.chillinz = !this.chillinz;
    }
    
    infos = [
        {name:'Cindy', occupation: 'teacher'},
        {name:'Billy', occupation: 'computer'},
        {name:'CindyB', occupation: 'lawyer'}
    ]

}
