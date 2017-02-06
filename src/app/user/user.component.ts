import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit, OnDestroy {
    
    private subscription: Subscription;
    
    private id: string;
    
    private param: string;
    
    constructor(private router: Router, private activatedR: ActivatedRoute) {
        //this.id = activated.snapshot.params['id'];
        
        //an observable is a wrapper around an object that you can watch for changes
        this.subscription = activatedR.params.subscribe(
            params => {
                
                this.id = params['id'];
                
            }
        );
        
        
        this.subscription = activatedR.queryParams.subscribe(
            
            queryParam => {
                this.param = queryParam['analytics']
                
            }
    
        );
        
        //Extracting a Fragment
        /*
        this.subscription = activatedR.fragment.subscribe(
        
            fragment => {
         
                console.log(fragment);
            }
        );
    */
    
}

    onNav(){
      this.router.navigate(['/']);
    }
    
    ngOnDestroy() {
        this.subscription.unsubscribe();
        
    }

    ngOnInit() {

    }
    

}
