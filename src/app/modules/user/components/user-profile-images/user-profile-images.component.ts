import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public image: ImagesList;
  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params.id;
    this.userService.getUserImages(id).subscribe((data: ImagesList) => {
      this.image = data;
    });
  }

}
