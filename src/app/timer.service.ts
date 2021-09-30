import { Injectable } from '@angular/core';


@Injectable()
export class TimerService {
  private timer: any;
  private counter = 0; 
  constructor() {
   }
   comeco(){
    if(!this.timer){
      this.counter = 0;
      this.timer = setInterval(()=>{
        this.counter++;
        if(this.counter == 60){
          this.parar();
          this.comeco();
        }
      }, 1000)
      }
    }
  parar(){
    if(this.timer){
      clearInterval(this.timer);
      this.timer=null;
    }
  }
  getCount(){
    return this.counter;
  }
}