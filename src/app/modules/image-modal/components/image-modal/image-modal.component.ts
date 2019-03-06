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
  public imageDetails: ImageDetails;

  constructor(
    private imageModalService: ImageModalService
  ) { }

  ngOnInit() {
    this.imageModalService.getImageInfo(this.imageId).subscribe((data: ImageDetails) => {
      console.log(data);
      this.imageDetails = data;
    });
  }

  closeModal() {
    this.onClose.emit();
  }


}
