import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home-component'
import {UserComponent} from './user/user.component';
import {USER_ROUTES} from './user/user.routes';


const APP_ROUTES: Routes = [
    
    {path: '', component: HomeComponent},
    {path: 'user', component: UserComponent},
    {path: 'user/:section', component: UserComponent, children: USER_ROUTES},
    {path: 'user/:id', component: UserComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
    
];

export const routing = RouterModule.forRoot(APP_ROUTES);