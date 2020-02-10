import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public _HTTP:HttpClient) { }
// Decode Tokens
  decodeToken(){
    console.log('calling decodeToken')
    return this._HTTP.get<any>(environment.apiAuth +'/decodeToken');
  }

  // Initilizing Local Variables
  initilizeLocalToken(init:Boolean){
    return this._HTTP.post<any>(environment.apiAuth+'/initilizeLocalToken',{Initilize:init});
  }
}