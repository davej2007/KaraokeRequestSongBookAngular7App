import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AUTHService {

  // Authentication Variables
  public token : String;
  public user : any = {id : String, name : String, exp: Number}

  public admin : String = '11';
  public showMainNav:Boolean;
  public showAdminNav:Boolean;
  public adminOpen:Boolean;
  
  constructor(
    public _Auth:AuthService
  ) { }

  initilizeSettings(): Promise<any> {
    console.log('initilize ', this.token)
    if(this.token ==='false' || this.token===null || this.token===undefined) this.token = localStorage.getItem('user') || 'false';
    
    const tokenPromise = this._Auth.decodeToken()
      .toPromise()
      .then(token => {
        console.log('Auth Service :',token)
        if(token.success){
          this.user.id = token.user.id;
          this.user.name = token.user.name
          this.user.exp = token.user.exp
          this.admin = token.admin
        } else {
          this.user.id = 'false'
          this.user.name = 'false'
          this.user.exp = 0;
          this.admin = '000000000'
        }                      
        return token;
      });                
    return tokenPromise;
  }


  userLoggedIn(){
    if(this.user.id=='false'){
      return false
    } else {
      return true
    }
  }
  adminRights(e:any){
    if(!!this.admin){
      for (var i = 0; i <= e.length; i++) {
        if (i==e.length){
          return false;
        } else {
          if(this.admin[e[i]]=='1') return true;
        }
      }
    }
    return false;
  }
  storeLocalVariable(user:string){
    if (user) {
      localStorage.setItem('user', user);
      this.token = user;
    }
  }
  doLogOut(){
    localStorage.removeItem('user');
    this.token = 'false';
  };
}