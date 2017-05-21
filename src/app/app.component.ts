import { Component } from '@angular/core';
import { WecoolinmanService } from './wecoolinman.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[WecoolinmanService]
})
export class AppComponent {
    title = 'Sistabigbone!';
    love = 'wwwoowww';
    numberInterpulation = 9320;
    imageLink = 'http://media.treehugger.com/assets/images/2016/03/pacific-size.jpg.662x0_q70_crop-scale.jpg';

     cool = 'hey man yeah';
    
     //value = '';
    
    allowinfo = false;
    
    //injected service
    constructor(private wecoolin: WecoolinmanService){
        
        wecoolin.writeLog('Im a service we got injected');
        
        setTimeout(() =>{
            this.allowinfo = true;
        }, 2000)
        
    }

    

    //logging information on button click (service)
    loginfo(values){
        //console.log(values)
        this.wecoolin.writeLog(values)
    }
    
    /*
    ngOnInit(){
        this.wecoolin.writeLog.subscribe(
            data => this.value = data;
        )
    
    }*/

    //id for params route
    private id = 'wwww0ww';
    
    //param for query parameters
    private param = 'whoohaaaa-I-yaall-incheck';

    
    //section for child routes
    private section = 'wine';


}
