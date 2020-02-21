import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AUTHService } from 'src/app/components/AUTHModule/AUTH.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogOutModalContent } from './logoutModal/logout';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {


  constructor(
    public _AUTH:AUTHService,
    public _Router:Router,      
    public modalService: NgbModal
    ) { }

    ngOnInit(){
      this._AUTH.showMainNav = true;
      this._AUTH.showAdminNav = true;
      this._AUTH.adminOpen = false;
    }
  // Variables
  public envName = environment.name;
  
  toggleCollapse() {
    if (!this._AUTH.adminOpen) {
      this._AUTH.showMainNav = !this._AUTH.showMainNav
    } else {
      if(this._AUTH.showMainNav && this._AUTH.showAdminNav){
        this._AUTH.showMainNav = true; this._AUTH.showAdminNav = false;
      } else if(this._AUTH.showMainNav && !this._AUTH.showAdminNav){
        this._AUTH.showMainNav = false; this._AUTH.showAdminNav = true;
      } else {
        this._AUTH.showMainNav = true; this._AUTH.showAdminNav = true;
      }
    }
  }
  doLogOut(){
    this.modalService.open(LogOutModalContent, {backdrop:'static'}).result.then(
      res => {
        this._AUTH.doLogOut();
        this._Router.navigateByUrl('/afterLogin');
      },
      reason => { }
    );
  }

  //   this.modalService.open(LogOutModalContent, {backdrop:'static'}).result.then(
  //     res => {
  //       if(res.success){
  //         this._AUTH.doLogOut();
  //         this._AUTH.initilizeSettings();
  //         this._Router.navigateByUrl('/login');
  //       }
  //     }
  //   );
  // }
}
