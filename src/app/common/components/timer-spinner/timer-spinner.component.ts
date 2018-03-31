import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TimeSpinnerObj } from '../../interfaces/time-spinner-obj';

@Component({
  selector: 'db-app-timer-spinner',
  templateUrl: './timer-spinner.component.html',
  styleUrls: ['./timer-spinner.component.css']
})
export class TimerSpinnerComponent implements OnInit{

  @Input() timeout: number;
  @Output() timeUp = new EventEmitter();  // Hosting components can register to this event
  
  // TimeSpinner Interface
  timerObj: TimeSpinnerObj = {
    color: 'accent', // Initial color of the timer
    value: 0, // Initial value of the timer
    mode: 'determinate' // Mode of the timer
  };

  //Local variables  
  timeRemaining: number;
  timetotal: number;

  ngOnInit() {
    this.timeRemaining = this.timeout;
    this.timetotal = this.timeout;

    this.timeCheck();
  };
  
  timeCheck(): void {
    this.timerObj.value = (1 - (this.timeRemaining / this.timetotal))*100;
    if(this.timerObj.value < 80) {
      this.timerObj.color = 'accent';
    } else if(this.timerObj.value > 80) {
      this.timerObj.color = 'warn';
    }
    
    if(this.timeRemaining > 0) {
      setTimeout(() => {
        this.timeRemaining = this.timeRemaining - 1;
        this.timeCheck();
      }, 1000);
    }

    if(this.timeRemaining <= 0) {
      this.timeUp.emit(); // Emit event for the hosting component
    }
  };
}
