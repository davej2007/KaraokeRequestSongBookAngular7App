import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'redirect-after-login',
  templateUrl: './redirect-after-login.component.html',
  styleUrls: ['./redirect-after-login.component.css']
})
export class RedirectAfterLoginComponent implements OnInit {

  constructor(public _Router:Router,) { }

  ngOnInit() {
    this._Router.navigateByUrl('/');
  }

}
