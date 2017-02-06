import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { SingerComponent } from './other/singer.component';
import { CoolinComponent } from './other/coolin.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DoubleDsComponent } from './lifecycle/doubleds/doubleds.component';
import { HighlightDirective } from './lifecycle/highlight.directive';
import { HomeComponent } from './home-component';
import { UserComponent } from './user/user.component';
import { routing } from './app.routing';
import { UserDetailComponent } from './user/user-detail.component';
import { UserEditComponent } from './user/user-edit.component';
import { TemplateComponent } from './template/template.component';
import { PipesComponent } from './pipes/pipes.component';
import { DoublePippeyPipe } from './pipes/double-pippey.pipe';
import { FilteringPipe } from './pipes/filtering.pipe';
import { HttpComponent } from './http.component';
import { AnimationComponent } from './animation/animation.component';



@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    SingerComponent,
    CoolinComponent,
    LifecycleComponent,
    DoubleDsComponent,
    HighlightDirective,
    HomeComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent,
    TemplateComponent,
    PipesComponent,
    DoublePippeyPipe,
    FilteringPipe,
    HttpComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
