
import { TestBed, inject } from '@angular/core/testing';

import {  ActiveworkoutService } from './activeworkout.service';
import { Response, Http, Headers, RequestOptions } from '@angular/http';


describe('Active WorkoutService',() =>{

  let activeworkoutService:ActiveworkoutService;
  let _http:Http;
  let spy:any;
  let res:any ={status:200};
  beforeEach(() =>{
    activeworkoutService = new ActiveworkoutService(_http);
    res ={status:200};
  });

  afterEach(()=>{

  });

  it('To test rest error Handler',()=>{
    
    expect(activeworkoutService.responseHandling(res)).toBeNull;

  });

})
