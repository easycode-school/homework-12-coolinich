import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ImageModalService } from './../../services/image-modal.service';
import { ImageDetails } from '../../interfaces/imageDetails';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements OnInit {
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Input() imageId: string;
  @Input() authUserId: string;
  public imageDetails: ImageDetails;

  constructor(
    private imageModalService: ImageModalService
  ) { }

  ngOnInit() {
    this.imageModalService.getImageInfo(this.imageId).subscribe((data: ImageDetails) => {
      this.imageDetails = data;
    });
  }

  closeModal() {
    this.onClose.emit();
  }

  calculatePostCommentTime(timeStamp: string) {
     const nowTime = new Date();
     const postTime = new Date(timeStamp);
     return Math.floor(nowTime.getTime() - postTime.getTime() / 1000);
  }
}
