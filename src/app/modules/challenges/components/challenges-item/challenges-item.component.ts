import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from './../../interfaces/challenge';

@Component({
  selector: 'app-challenges-item',
  templateUrl: './challenges-item.component.html',
  styleUrls: ['./challenges-item.component.css']
})
export class ChallengesItemComponent implements OnInit {
  @Input() challengeItem: Challenge;
//  public nowDate = new Date();
  public timerFlag = false;
  public timerLength = 0;
  public numDays = '';
  constructor() { }

  ngOnInit() {
   if (this.challengeItem.is_active && !this.challengeItem.is_closed) {
      this.setTimer();
  }
  }

  // This function calculates timer for challengeItem.
  // It compares current and end date of challenge and if end date is in future, sets countdown timer or just shows remaining days
  setTimer() {
    const nowDate = new Date();
    const endTime = new Date(this.challengeItem.end_date);
    this.timerLength = Math.floor(( endTime.getTime() - nowDate.getTime() ) / 1000);
    // might be useful for stopping / pausing active timer
    let interval;

    if (this.timerLength >= 172800) {
      this.numDays = 'days left';
      this.timerFlag = true;
      return;
    }
    if (this.timerLength >= 86400) {
      this.numDays = 'day left';
      this.timerFlag = true;
      return;
    }
    interval = setInterval(() => {
      if (this.timerLength > 0) {
        this.timerLength--;
        this.timerFlag = true;
      } else {
        this.timerLength = 0;
        this.timerFlag = false;
        }
    }, 1000);
  }

}
