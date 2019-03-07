import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatAmount'
})
export class FormatAmountPipe implements PipeTransform {

  transform(value: number): string {
    return value < 1000 ? `${value}` : `${Math.round(value / 100) / 10 }k`;
  }

}
