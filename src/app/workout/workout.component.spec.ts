import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
// import 'rxjs/add/operator/switchMap';

import { workout } from '../workout';
import { category } from '..//category';
import { WorkoutService } from '../services/workout.service';
import { CategoryService } from '../services/category.service';
import { AppModule } from '../app.module'


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { WorkoutComponent } from './workout.component';

import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';
const    Aaaaa = [{ "workout_id": 2, "category": { "_catId": 35, "categoryName": "AAA" }, "workout_title": "aaa", "workout_note": "aaa", "cbpm": 0.1 }]
const aaa = { "workout_title":"adfasfa", "workout_note":"adfasfa","cbpm":0,"workout_id": 2, "category": { "_catId": 35, "categoryName": "AAA" }};
class MockWorkoutService  {
  getAllWorkouts(): Observable<workout[]> {

   return ;

  }

  save1Workout(workout:workout):String{
    var status ="Success";
    return status;
  }

  // [{"_catId":35,"categoryName":"AAA"},{"_catId":1,"categoryName":"AA"}]
  // [{ "workout_id": 2, "category": { "_catId": 35, "categoryName": "AAA" }, "workout_title": "aaa", "workout_note": "aaa", "cbpm": 0.1 }]

}

describe('WorkoutComponent', () => {
  let component: WorkoutComponent;
  let fixture: ComponentFixture<WorkoutComponent>;
  let workServ: WorkoutService;
  let mockWorkServ: MockWorkoutService;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppModule
      ],
      providers: [{provide : WorkoutService,useValue : MockWorkoutService }, { provide: APP_BASE_HREF, useValue: '/' }]

    })
    fixture = TestBed.createComponent(WorkoutComponent);
    component = fixture.componentInstance;
    workServ = TestBed.get(WorkoutService);
    //spyOn(workServ,'saveWorkout').and.returnValue("Status");
   // spyOn(workServ,'sadfaf').and.returnValue(Observable.of(Aaaaa));
    fixture.detectChanges();
  }));


  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });



   xit('Should create a work item ',() =>{
     spyOn(workServ,'saveWorkout').and.returnValue("");
     expect(component.insertupdateWorkout(aaa)).toBeFalsy();
   

});

});