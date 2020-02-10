import { Component, OnInit } from '@angular/core';
import { AUTHService } from 'src/app/components/AUTHModule/AUTH.service';

@Component({
  selector: 'dj-nav',
  templateUrl: './dj-nav.component.html',
  styleUrls: ['./dj-nav.component.css']
})
export class DjNavComponent implements OnInit {

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