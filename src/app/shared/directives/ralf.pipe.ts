import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ralf'
})
export class RalfPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + 'ralf';
  }

}
