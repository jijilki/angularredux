
import { TestBed, inject } from '@angular/core/testing';

import { CategoryService } from './category.service';
import { Response, Http, Headers, RequestOptions } from '@angular/http';


describe('CategoryService',() =>{
  let categoryService:CategoryService;
  let _http:Http;
  let spy:any;
  let res:any ={status:200};
  beforeEach(() =>{
    categoryService = new CategoryService(_http);
    res ={status:200};
  });

  afterEach(()=>{

  });

  it('To test rest error Handler',()=>{
    
    expect(categoryService.responseHandling(res)).toBeNull;

  });

})
