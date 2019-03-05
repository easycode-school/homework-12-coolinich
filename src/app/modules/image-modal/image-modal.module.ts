import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModalComponent } from './components/image-modal/image-modal.component';

@NgModule({
  declarations: [ImageModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ImageModalComponent
  ]

})
export class ImageModalModule { }
