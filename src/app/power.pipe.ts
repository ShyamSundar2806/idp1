import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: any,other:any, ...args: unknown[]): unknown {
    return value*other;
  }

}
