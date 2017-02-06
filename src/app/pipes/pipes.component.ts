import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
    
    private valuez:string = 'new rmadsdf';
    private days = new Date(2015,20, 25);
    
    constructor() { }

    ngOnInit() {
    }
    
    //array for filter
    values = ['Milk', 'Bread', 'Oatmeal', 'Porage']
    
    //array for impure pipes
    values2 = ['Reggae', 'Chllin', 'We', 'manae']

}
