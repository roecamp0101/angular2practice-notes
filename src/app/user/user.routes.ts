import {Routes} from '@angular/router';

import {UserEditComponent} from './user-edit.component';
import {UserDetailComponent} from './user-detail.component';

export const USER_ROUTES: Routes = [
    
    {path: 'edit', component:UserEditComponent},
    {path: 'detail', component:UserDetailComponent}
    
];