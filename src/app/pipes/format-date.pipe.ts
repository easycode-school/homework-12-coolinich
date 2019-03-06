import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: Date): any {
    const currentDate: Date = new Date();
    const difference = currentDate.getTime() - value.getTime();
    let minutesPrint: string;
    if (difference < 60000) {
      return `right now`;
    }
    if (difference >= 60000 && difference < 3600000) {
      return `${ Math.round(difference / 60000) === 1 ? '1 minute' : `${Math.round(difference / 60000)} minutes`} ago`; }
    if (difference >= 3600000 && difference < 86400000) {
      switch (Math.round((difference % 3600000) / 60000)) {
        case 0: minutesPrint = ''; break;
        case 1: minutesPrint = ' and 1 minute'; break;
        default: minutesPrint = ` and ${Math.round((difference % 3600000) / 60000)} minutes`;
      }
      return `${Math.round(difference / 3600000) === 1 ? '1 hour' : `${Math.round(difference / 3600000)} hours`}${minutesPrint} ago`;
    } else {
      return `${value.getDate()}.${value.getMonth() < 10 ? `0${value.getMonth()}` : value.getMonth()}.${value.getFullYear()} at
      ${value.getHours() ? value.getHours()  : '00'}:${value.getMinutes() ? (value.getMinutes() < 10 ? `0${value.getMinutes()}` : value.getMinutes()) : '00'}`;
    }
  }

}