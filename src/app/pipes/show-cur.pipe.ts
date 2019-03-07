import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showCur'
})
export class ShowCurPipe implements PipeTransform {

  transform(value: number, cur: string): any {
    switch (cur.toLowerCase()) {
      case 'usd':
        return `$${value}`;
      case 'eur':
        return `€${value}`;
      case 'uah':
        return `₴${value}`;
      default: return `${cur.toUpperCase()}${value}`;
    }
  }

}
