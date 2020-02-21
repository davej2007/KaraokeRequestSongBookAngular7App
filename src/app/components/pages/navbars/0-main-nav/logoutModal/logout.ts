import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'logout-modal-content',
  templateUrl: `./logout.html`,
  styleUrls: ['./modal.css']
})
export class LogOutModalContent implements OnInit {
  // clock 
  private _time$: Observable<Date> = timer(0, 500).pipe(
    map(tick => new Date()),
    shareReplay(1)
  );
  get time() {
      return this._time$;
  }
  constructor(
    public activeModal: NgbActiveModal,
    public _Router:Router) {

      this.time.subscribe((now: Date) => {
        this.currentTime = now.valueOf();
        this.remainingTime=this.allowedTime-Math.floor((this.currentTime-this.activateTime)/1000)
        if(this.remainingTime<=0){
          this.errorMsg='Logged Out : Time Out';
              setTimeout(()=>{
                this.errorMsg = '';
                this.activeModal.close('Confirm');
              }, 1500);
        }
      });
    }
    // Variables
    emNumber = '';
    errorMsg:String = '';
    successMsg:String = '';
    processing:Boolean = false;
    currentTime:number;
    activateTime:number = Date.now().valueOf();
    allowedTime :number = 10;
    remainingTime :number;
    
    ngOnInit(){}
  }