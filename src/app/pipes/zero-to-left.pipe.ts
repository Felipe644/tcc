import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroToLeft'
})
export class ZeroToLeftPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return ("0000" + value).slice(-4);
  }

}
