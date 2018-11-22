import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Activation of store.
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import {INITIAL_STATE,IAppState,rootReducer} from '../store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ViewallComponent } from './viewall/viewall.component';
import { WorkoutComponent } from './workout/workout.component';
import { CategoryComponent } from './category/category.component';
import { TrackComponent } from './track/track.component';
import { TestComponent } from './test/test.component';



import { WorkoutService } from './services/workout.service';
import { CategoryService } from './services/category.service';
import { ActiveworkoutService } from './services/activeworkout.service';
import { CategoryPipe } from './pipes/category.pipe';
import { ActiveworkoutComponent } from './activeworkout/activeworkout.component';


import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { WorkoutPipe } from './pipes/workout.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ViewallComponent,
    WorkoutComponent,
    CategoryComponent,
    TrackComponent,
    TestComponent,
    CategoryPipe,
    ActiveworkoutComponent,
    WorkoutPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgReduxModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme),
  ],
  providers: [
    WorkoutService,
    CategoryService,
    ActiveworkoutService
  ],
  bootstrap: [AppComponent]

})

export class AppModule {
   constructor(ngRedux: NgRedux<IAppState>) {
      ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }

}