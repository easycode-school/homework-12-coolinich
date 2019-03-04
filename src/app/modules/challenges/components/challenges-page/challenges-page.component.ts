import { Component, OnInit } from '@angular/core';
import { ChallengesServiceService } from './../../services/challenges-service.service';
import { Challenge } from './../../interfaces/challenge';

@Component({
  selector: 'app-challenges-page',
  templateUrl: './challenges-page.component.html',
  styleUrls: ['./challenges-page.component.css']
})
export class ChallengesPageComponent implements OnInit {
  public challengesList: Challenge[];
  public activeTab = 'open';
  constructor(
    private challengesServiceService: ChallengesServiceService
  ) { }

  ngOnInit() {
    this.openTabHandler();
  }

  // Handlers for Tab menu items. If clicked, handler sets clicked tab as active and call API toget corresponding data.
  openTabHandler() {
    this.activeTab = 'open';
    this.challengesServiceService.getChallenges(1, 0).subscribe((data: Challenge[]) => {
      this.challengesList = data;
    });
  }

  upcomingTabHandler() {
    this.activeTab = 'upcoming';
    this.challengesServiceService.getChallenges(0, 0).subscribe((data: Challenge[]) => {
      this.challengesList = data;
    });
  }

  closedTabHandler() {
    this.activeTab = 'closed';
    this.challengesServiceService.getChallenges(0, 1).subscribe((data: Challenge[]) => {
      this.challengesList = data;
    });
  }


}
