import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number): any {
    // tslint:disable-next-line:max-line-length
    return (value > 86400) ? `${Math.floor(value / 86400)}` : `${Math.floor(value / 3600)} : ${Math.floor((value % 3600) / 60) < 10 ? `0${Math.floor((value % 3600) / 60)}` : Math.floor((value % 3600) / 60)} : ${((value % 3600) % 60) < 10 ? `0${(value % 3600) % 60}` : (value % 3600) % 60}`;
  }

}
