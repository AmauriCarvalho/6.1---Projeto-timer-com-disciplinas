import { Injectable } from '@angular/core';


@Injectable()
export class TimerService {
  private timer: any;
  private counter = 0;
  c = 0;
  f = 0; 
  constructor() {
   }
   start(ms: number){
      if(!this.timer && this.c > 0){
        this.counter = this.c;
        this.timer = setInterval(()=>{
          this.counter++;
          if(this.f == this.counter){
            clearInterval(this.timer);
            this.timer=null;
          }
        }, ms);
      }
  }
  stop(){
    if(this.timer){
      clearInterval(this.timer);
      this.timer=null;
    }
  }
  getCount(){
    return this.counter;
  }
}