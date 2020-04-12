import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DJNumberValidator, DJNameValidator, passwordValidator } from 'src/app/components/custom/customValidators';
import { randomChar } from 'src/app/components/custom/functions';
import { getAdminValues } from 'src/app/components/custom/newDefaultValues';
import { AdminDJService } from 'src/app/components/service/admin-dj.service';

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
  constructor(
    private fb:FormBuilder,
    private _Router:Router,
    public _DJ:AdminDJService) { }
  // Variables
  errorMsg:String = '';
  successMsg:String = '';
  processing:Boolean = false;
  generate:Boolean = false;
  page:number = 0;
  adminSections :any = getAdminValues;
  numberValid:Boolean = true;
  numberMessage:String = '';

  // Form Definitions
  newDJForm = this.fb.group({
    number: [null, [Validators.required, DJNumberValidator]],
    name:[null, [Validators.required, Validators.minLength(5), Validators.maxLength(50), DJNameValidator]],
    password : [null, [Validators.required, Validators.minLength(8), Validators.maxLength(30), passwordValidator]]    
  });
  disableForm(){
    this.processing = true;
    this.number.disable();
    this.name.disable();
    this.password.disable();
  }
  enableForm(){
    this.processing = false;
    this.number.enable();
    this.name.enable();
    this.password.enable();
  }
  ngOnInit() {
  }
  // next & Previous Buttons
  nextPage(p:number){
    if(p<2) {return p+1;} else {return 2}
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
  checkDJNumber(){
    
  }
  cancel(){
    this.disableForm();
    this._Router.navigate(['/adminSetUp']);
  }
  // submit form and Save
  submit() {
    this.disableForm();
    let newDJ = this.newDJForm.value
    var asg = '00000000000000'.split("");
    this.adminSections.forEach((section:any)=>{
      section.section.forEach(b => {
        if(b.employee) asg[b.button]='1';
      });
    });
    newDJ.admin = asg.join("");
    this._DJ.createDJ(newDJ).subscribe(
      res => {
        if(res.success){
          this.successMsg='New Admin User Created : '+res.dj.name+' : '+res.dj.number;
          setTimeout(()=>{
            this.successMsg = '';
            this._Router.navigate(['/adminSetUp']);
          }, 2000);
        } else {
          this.errorMsg='Error : '+res.message;
          setTimeout(()=>{
            this.errorMsg = '';
            this.enableForm();
          }, 2000);
        }
      },
      err => {
        alert('Server Error : '+err.message+' If this continues Please contact Systems.');
      }
    )
  }
}
