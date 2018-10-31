import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutService } from '../services/workout.service'
import { ViewallComponent } from './viewall.component';
import { AppModule } from '../app.module'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

describe('ViewallComponent', () => {
  let component: ViewallComponent;
  let fixture: ComponentFixture<ViewallComponent>;
  //Removed async to get rid of the error -  [object ErrorEvent] thrown. 
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
      providers: [WorkoutService, { provide: APP_BASE_HREF, useValue: '/' }]

    })
    fixture = TestBed.createComponent(ViewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});

