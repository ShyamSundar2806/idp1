import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: any,other:any ,...args: unknown[]): unknown {
    return value*other;
  }

}
