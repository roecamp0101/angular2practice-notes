import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
    
    
    onSubmit(form:NgForm){
        console.info(form)
        //console.info(form.value) //to see info of grouped forms and value of fields.
    }
    
    genders:string [] = ['male', 'female']

  constructor() { }

  ngOnInit() {
  }

}
