import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminDJService {

  constructor(public _HTTP:HttpClient) { }

  // create New DJ
  createDJ(user:any){
    console.log(user)
    return this._HTTP.post<any>(environment.apiDJ+'/createNewDJ', user);
  }
}