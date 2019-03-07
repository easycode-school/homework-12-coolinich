import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengesPageComponent } from './components/challenges-page/challenges-page.component';
import { ChallengesItemComponent } from './components/challenges-item/challenges-item.component';
import { ChallengesRoutingModule } from './сhallenges-routing.module';
import { MatCardModule } from '@angular/material/card';
import { FormatAmountPipe } from './../../pipes/format-amount.pipe';
import { ShowCurPipe } from './../../pipes/show-cur.pipe';
import { FormatTimePipe } from './../../pipes/format-time.pipe';
import { TimerDirective } from './../../directives/timer.directive';

@NgModule({
  declarations: [
    ChallengesPageComponent,
    ChallengesItemComponent,
    FormatAmountPipe,
    ShowCurPipe,
    FormatTimePipe,
    TimerDirective
  ],
  imports: [
    CommonModule,
    ChallengesRoutingModule,
    MatCardModule,
  ]
})
export class ChallengesModule { }
