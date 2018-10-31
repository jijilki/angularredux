import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutService } from '../services/workout.service'
import { TrackComponent } from '../track/track.component';
import { AppModule } from '../app.module'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

describe('Track Component', () => {
  let component: TrackComponent;
  let fixture: ComponentFixture<TrackComponent>;
  let date: number;

  beforeEach(async(() => {
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
      .compileComponents();
    fixture = TestBed.createComponent(TrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //date = Date.now();
    date =1527082545704;
  }));



  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('transform date', () => {
    expect(component.transformDate(date)).toBe("2018-05-23");

  })
});

