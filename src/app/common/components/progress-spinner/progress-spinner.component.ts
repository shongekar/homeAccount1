import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'db-app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent {
  mode = 'determinate';

  @Input() timeout: number;
  @Output() timeUp = new EventEmitter();  // Hosting components can register to this event

  color: string = 'accent';  // State of the timer
  value: number = 0;  // Initial value of the timer
  timeRemaining: number;
  timetotal: number;

  ngOnInit() {
    this.timeRemaining = this.timeout;
    this.timetotal = this.timeout;

    this.timeCheck();
  };
  
  timeCheck(): void {
    var progress: number = (1 - (this.timeRemaining / this.timetotal))*100;
    if(progress < 80) {
      this.color = 'accent';
    } else if(progress > 80) {
      this.color = 'warn';
    }
    this.value = progress;
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
