import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DJNumberValidator, DJNameValidator, passwordValidator } from 'src/app/components/custom/customValidators';
import { randomChar } from 'src/app/components/custom/functions';

@Component({
  selector: 'new-dj',
  templateUrl: './new-dj.component.html',
  styleUrls: ['./new-dj.component.css']
})
export class NewDJComponent implements OnInit {
  // form Get
  get number()      {    return this.newDJForm.get('number'); }
  get name()        {    return this.newDJForm.get('name');   }
  get password()    {    return this.newDJForm.get('password');  }
  constructor(private fb:FormBuilder,
    private _Router:Router) { }
  // Variables
  errorMsg:String = '';
  successMsg:String = '';
  processing:Boolean = false;
  generate:Boolean = false;
  page:number = 0;

  numberValid:Boolean = true;
  numberMessage:String = '';

  // Form Definitions
  newDJForm = this.fb.group({
    number: [null, [Validators.required, DJNumberValidator]],
    name:[null, [Validators.required, Validators.minLength(5), Validators.maxLength(50), DJNameValidator]],
    password : [null, [Validators.required, Validators.minLength(8), Validators.maxLength(30), passwordValidator]]    
  });
  ngOnInit() {
  }

  // next & Previous Buttons
  nextPage(p:number){
    if(p<3) {return p+1;} else {return 3}
  }
  prevPage(p:number){
    if(p>0) {return p-1;} else {return 0}
  }
  generatePassword(){
    this.generate = true;
    let temp = randomChar('capital')+randomChar('all')+randomChar('lower')+randomChar('all')+randomChar('all')
              +randomChar('lower')+randomChar('all')+randomChar('number')+randomChar('all')+randomChar('all')
              +randomChar('lower')+randomChar('all')+randomChar('capital')+randomChar('all')+randomChar('all')
    this.password.setValue(temp);
    this.generate = false;
  }
}
