import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutService } from '../services/workout.service'
import { CategoryComponent } from '../category/category.component';
import { AppModule } from '../app.module'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      imports:[ BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppModule
    ],
      providers:[WorkoutService,{provide: APP_BASE_HREF, useValue: '/'}]
      
    })
    .compileComponents();
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

