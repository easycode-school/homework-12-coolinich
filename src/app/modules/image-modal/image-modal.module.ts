import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModalComponent } from './components/image-modal/image-modal.component';
import { FormatDatePipe } from 'src/app/pipes/format-date.pipe';

@NgModule({
  declarations: [
    ImageModalComponent,
    FormatDatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageModalComponent
  ]

})
export class ImageModalModule { }
