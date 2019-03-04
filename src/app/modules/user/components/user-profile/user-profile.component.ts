import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { AuthGlobalService } from 'src/app/services/auth-global.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public user: User;
  public authUserId: string;
  public userProfileId: string;
  public activeTab = 'selfies';
  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    private auth: AuthGlobalService
  ) {
    // this.authUserId = this.auth.getUserId;
  }

  ngOnInit() {
    this.authUserId = this.auth.getUserId;
    this.userProfileId = this.activeRoute.snapshot.params.id;
    this.userService.getUserInfo(this.userProfileId).subscribe((data: User) => {
      this.user = data;
    });
  }
}
