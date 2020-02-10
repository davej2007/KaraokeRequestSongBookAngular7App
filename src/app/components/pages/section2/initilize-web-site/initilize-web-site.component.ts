import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/service/auth.service';
import { AUTHService } from 'src/app/components/AUTHModule/AUTH.service';

@Component({
  selector: 'initilize-web-site',
  templateUrl: './initilize-web-site.component.html',
  styleUrls: ['./initilize-web-site.component.css']
})
export class InitilizeWebSiteComponent implements OnInit {

  constructor(
    private _Router:Router,
    private _Auth:AuthService,
    private _AUTH:AUTHService
  ) { }

  ngOnInit() {
    this._Auth.initilizeLocalToken(true).subscribe(
      res=>{
        if(!res.success){
          this._Router.navigateByUrl('/')
        } else {
          this._AUTH.user = {id : res.user.id ,name :res.user.name, exp :res.user.exp }
          this._AUTH.admin = res.user.admin
          this._AUTH.storeLocalVariable(res.userToken);
          this._Router.navigateByUrl('/adminSetUp/newDJ')
        }
      }
    )
  }
}