import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Image } from '../../interfaces/image';
import { ImagesList } from '../../interfaces/image';


@Component({
  selector: 'app-user-profile-images',
  templateUrl: './user-profile-images.component.html',
  styleUrls: ['./user-profile-images.component.css']
})
export class UserProfileImagesComponent implements OnInit {
  @Input() authUserId: string;
  // tbd with upload card
  @Input() userProfileId: string;
  public image: ImagesList;
  public uploadPhotosModalIsOpened = false;
  public imageDetailsModalIsOpened = false;
  public clickedImageId = '';
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getImages(this.userProfileId);
  }

  getImages(id: string) {
    this.userService.getUserImages(id).subscribe((data: ImagesList) => {
      this.image = data;
    });
  }
}
