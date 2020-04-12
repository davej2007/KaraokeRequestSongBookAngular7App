import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminDJService } from 'src/app/components/service/admin-dj.service';
import { AuthService } from 'src/app/components/service/auth.service';
import { DJNumberValidator } from 'src/app/components/custom/customValidators';

@Component({
  selector: 'login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  // form Get
  get number()      {    return this.loginDJForm.get('number'); }
  get password()    {    return this.loginDJForm.get('password');  }
  get party()    {    return this.loginDJForm.get('party');  }
  constructor(
    private fb:FormBuilder,
    private _Router:Router,
    public _DJ:AdminDJService,
    public _Auth:AuthService) { }
  // Variables
  errorMsg:String = '';
  successMsg:String = '';
  processing:Boolean = false;
  generate:Boolean = false;
  login:Boolean = true;
  numberValid:Boolean = true;
  numberMessage:String = '';

  // Form Definitions
  loginDJForm = this.fb.group({
    number: [null, [Validators.required, DJNumberValidator]],
    password : [null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
    party : [null]   
  });
  disableForm(){
    this.processing = true;
    this.number.disable();
    this.password.disable();
    this.party.disable();
  }
  enableForm(){
    this.processing = false;
    this.number.enable();
    this.password.enable();
    this.party.enable();
  }
  ngOnInit() {
  }
  checkDJNumber(){}
  cancel(){}
  logInSubmit(){
    console.log(this.loginDJForm.value)
  }

}
