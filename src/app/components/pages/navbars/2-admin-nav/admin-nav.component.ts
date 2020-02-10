import { Component, OnInit } from '@angular/core';
import { AUTHService } from 'src/app/components/AUTHModule/AUTH.service';

@Component({
  selector: 'admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(
    public _AUTH:AUTHService
  ) { }

  ngOnInit(){    
    this._AUTH.showMainNav = true;
    this._AUTH.showAdminNav = false;
    this._AUTH.adminOpen = true;
  }
  ngOnDestroy(){
    this._AUTH.showMainNav = false;
    this._AUTH.showAdminNav = true;
    this._AUTH.adminOpen = false;
  }
}