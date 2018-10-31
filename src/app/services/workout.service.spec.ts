
import { TestBed, inject } from '@angular/core/testing';

import { WorkoutService } from './workout.service';
import { Response, Http, Headers, RequestOptions } from '@angular/http';


describe('WorkoutService',() =>{
  let workoutService:WorkoutService;
  let _http:Http;
  let spy:any;
  let res:any ={status:200};
  beforeEach(() =>{
    workoutService = new WorkoutService(_http);
    res ={status:200};
  });

  afterEach(()=>{

  });

  it('To test rest error Handler',()=>{
    
    expect(workoutService.responseHandling(res)).toBeNull;

  });

})
