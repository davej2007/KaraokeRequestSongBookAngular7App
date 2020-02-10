import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AUTHService } from '../AUTHModule/AUTH.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  
  intercept(req : any, next){
    let _Auth = this.injector.get(AUTHService)
    let tokenizedReq = req.clone({
      setHeaders:{
        xtoken:`Bearer ${ _Auth.token } `
      }
    })
    return next.handle(tokenizedReq)
  }
}