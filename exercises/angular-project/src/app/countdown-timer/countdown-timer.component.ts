import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  max = 10;
  timerId = 0
  constructor() { }

  ngOnInit(): void {
  }
  startCountdown() {
    this.timerId = setInterval(() => {
      this.max--;
      if (this.max === 0) {
        clearInterval(this.timerId);
      }
    }, 1000);
  }
  stopCountdown() {
    clearInterval(this.timerId);
  }
  resetCountdown() {
    this.max = 10;
    clearInterval(this.timerId);
  }
}
