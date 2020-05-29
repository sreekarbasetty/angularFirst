import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortnumber'
})
export class SortnumberPipe implements PipeTransform {

  transform(value: number[], ...args: unknown[]): unknown {
    return value.sort();
  }

}
