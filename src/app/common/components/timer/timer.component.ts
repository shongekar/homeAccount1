import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'dba-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit{
  
  @Input() timeout: number;
  @Input() barWidth: string = '100%';
  @Output() timeUp = new EventEmitter();  // Hosting components can register to this event

  state: string = 'ok';  // State of the timer
  timeleft: string = '100%';  // Time ramining
  width: number = 100;  // Initial width of the timer bar
  timeRemaining: number;
  timetotal: number;

  ngOnInit() {
    this.timeRemaining = this.timeout;
    this.timetotal = this.timeout;

    this.timeCheck();
  };
  
  timeCheck(): void {
    var progressBarWidth: number = this.timeRemaining * this.width / this.timetotal;
    if(progressBarWidth > 50) {
      this.state = 'ok';
    } else if(progressBarWidth < 50 && progressBarWidth > 15){
      this.state = 'warn';
    } else if(progressBarWidth < 15) {
      this.state = 'danger';
    }
    this.timeleft = progressBarWidth + '%';
    console.log(progressBarWidth)
    if(this.timeRemaining > 0) {
      setTimeout(() => {
        this.timeRemaining = this.timeRemaining - 1;
        this.timeCheck();
      }, 1000);
    }

    if(this.timeRemaining === 0) {
      this.timeUp.emit(); // Emit event for the hosting component
    }
  };
}
